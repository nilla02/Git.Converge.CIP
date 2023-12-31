<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Mockery\Matcher\Any;
use Spatie\Activitylog\Traits\LogsActivity;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Activitylog\LogOptions;
use App\Models\User;
use App\Models\Status_model;
use App\Models\Applicant_Type;
use App\Models\Country;




class TestTable extends Model
{
  use HasApiTokens, HasFactory,HasRoles,LogsActivity;

  public function run(): void
  {
     TestTable::factory()
              ->count(30)
              ->create();
  }

  protected function getActivitylogOptions(): LogOptions
  {
      $logOptions = new LogOptions();
      $logOptions->logName = 'Files uploaded'; // Choose a suitable log name
      $logOptions->logAttributes = ['agent_id', 'ref_number']; // Set the attributes directly
      return $logOptions;
  }
  protected static function boot()
  {
      parent::boot();

      static::updating(function (TestTable $testtable) {
          if ($testtable->risk_level !== null) {
            $testtable->risk_level_received_date = now();
          }
          if ($testtable->law_enforcement_sent !== null) {
            $testtable->preprocess_law_enforcement_docs_sent_date = now();
          }
          if ($testtable->source_of_funds_path !== null) {
            $testtable->source_of_funds_docs_sent_date = now();
          }
          if ($testtable->accounts_approval !== null) {
            $testtable->accounts_approval_date = now();
          }
      });
  }
  // Inside your TestTable model

    public function getDayPassedAttribute()
    {
        $currentDate = now();
        $createdDate = $this->created_at;

        $duration = $createdDate->diff($currentDate);
        return $duration->days;
    }

protected $appends = ['status','day_passed'];

protected static function booted(): void
{
    static::created(function (TestTable $testtable) {
        $submission = $testtable;
        $agent = User::find($submission->agent_id);
        $authUserName = $agent->name;
        $tableId = $submission->id;
        $authUserid = $submission->agent_id;
        $authUserFirstLetter = strtoupper(substr($authUserName, 0, 1));
        $applicantType = Applicant_Type::find($submission->type_of_applicant);
        $code = $applicantType->code;
        if ($submission->type_of_applicant == 2) {
            $testtable->ref_number = $authUserid . $authUserFirstLetter . $submission->type_of_investment . $submission->Region . $tableId . $submission->type_of_applicant;
        } else {
            $principleApplicant = TestTable::find($submission->principle_applicant_id);

            if ($principleApplicant) {
                $refSuffix = $principleApplicant->ref_number .$submission->id.$code;
                // Construct ref_number using prefix and suffix
                $testtable->ref_number =$refSuffix;
            } else {
                // Handle the case where principle_applicant_id is not found
                $testtable->ref_number = 'DefaultRef'; // You may change this default value as needed
            }
        }

        $testtable->save();
    });
}



  protected $fillable = [
    'agency',
    'ref_number',
    'agent_id',
    'first_name',
    'last_name',
    'status_id',
'visa_Number',
'visa_issue_date',
'visa_expiration_date',
'passport_number',
'country_of_issue',
    'file_path',
    'co_notes',
    'principle_applicant_id',
    'ddo_notes',
    'promoters',
    'ceo_id',
    'acc_id',
    'risk_id',
 'risk_level',
    'payment_amount',
    'Date_Of_Payment',
    'Region',
    'Gender',
    'date_of_birth',
    'Marriage_Status',
    'Accompanying_dependents',
    'accounts_approval',
    'co_id',
    'ddo_id',
    'promoter_id',
    'country_id',
    'proof_of_payment_path',
    'document_checklist_path',
    'authorized_agent_form_path',
    'alternative_citizenship_path',
    'confirmation_form_path',
    'registration_application_path',
    'birth_record_path',
    'name_change_path',
    'citizenship_certificate_path',
    'residence_card_path',
    'military_records_path',
    'photograph_certificate_path',
    'national_id_path',
    'current_passport_pages_path',
    'proof_of_residence_path',
    'marriage_certificate_path',
    'divorce_decree_path',
    'curriculum_vitae_path',
    'professional_reference_path',
    'bank_reference_path',
    'sworn_affidavit_financial_path',
    'sworn_affidavit_spouse_path',
    'academic_certificates_path',
    'police_certificates_path',
    'visas_path',
    'medical_examiner_declaration_path',
    'official_transcripts_path',
    'custody_records_path',
    'statutory_declaration_path',
    'copy_of_parent_id_path',
    'passport_sized_photos_path',
    'type_of_applicant',
    'type_of_investment',
    'principal_applicant_id',
    'citizenship_certificate_id',
    'closing_notes',
    'acc_notes',
    'ddo_assessment_path',
    'ceo_assessment_path',
    'co_assessment_path',
    'investment_amount',
    'spouse',
    'qualifying_dependents',
    'proof_of_investment_transferred_path',
    'ceo_notes_for_agent',
    'ceo_agent_notes',
    'co_agent_notes',
    'accepted_for_processing_date',
    'proof_of_investment_path',
    'agent_investment_notes',
    'certified_copy_professional_certificate_medical_examiner_path',
    'net_worth_document_support_path',
    'professional_certificate_translator_path',
    'apostille_path',
    'professional_certificate_notary_path',
    'professional_certificate_attorney_path',
    'professional_certificate_oaths_commissioner_path',
    'source_of_funds_path',
    'source_of_funds_docs_sent_date',
    'processing_fee_received_date',
    'preprocessing',
    'law_enforcement_sent',
    'law_enforcement_report_path',
    'preprocess_law_enforcement_docs_sent_date',
    'proceed_due_diligence',
    'proceed_due_diligence_docs_sent_date',
    'compliance_date',
    'addon',
    'open_at',
    'processing_fees_received_date',
    'risk_level_received_date',
    'accounts_approval_date',

  ];



protected function getStatusAttribute($value)
{
    return Status_model::find($this->status_id);
}

public function country()
{
    return $this->belongsTo(Country::class);
}

public function agent()
{
    return $this->belongsTo(User::class);
}


public function Promoter()
{
    return $this->belongsTo(User::class);
}

public function ddo()
{
    return $this->belongsTo(User::class,'ddo_id');
}

public function co()
{
    return $this->belongsTo(User::class,'co_id');
}

public function risk()
{
    return $this->belongsTo(User::class,'risk_id');
}

public function acc()
{
    return $this->belongsTo(User::class,'acc_id');
}
  protected function generateFilePath($value)
  {
    if(!$value) return null;
    $filepath = url('media/' . $this->agency . '/' . $this->ref_number. '/' . $this->id . '/' . $value);
    if($this->principle_applicant_id)
    {
      $primary=TestTable::find($this->principle_applicant_id);
      $filepath = url('media/' . $this->agency . '/' . $primary->ref_number . '/' . $primary->id . '/'  . $this->id . '/' . $value);
    }
    return $filepath;

  }


  protected function getProofOfPaymentPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getDocumentChecklistPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getAuthorizedAgentFormPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getAlternativeCitizenshipPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getConfirmationFormPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getRegistrationApplicationPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getBirthRecordPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getNameChangePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCitizenshipCertificatePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getResidenceCardPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getMilitaryRecordsPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getPhotographCertificatePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getNationalIdPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCurrentPassportPagesPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getProofOfResidencePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getMarriageCertificatePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getDivorceDecreePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCurriculumVitaePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getProfessionalReferencePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getSwornAffidavitFinancialPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getSwornAffidavitSpousePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getAcademicCertificatesPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getPoliceCertificatePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getVisasPathAttribute($value)
  {
    {
        $paths = [];

        if ($value !== null && is_string($value)) {
            $decoded = json_decode($value, true);


            if (is_array($decoded)) {
                foreach ($decoded as $key => $path) {
                    $paths[] = $this->generateFilePath($path);
                }
            }
        }

        return  count($paths)>0? $paths: null ;
    }
  }

  protected function getMedicalExaminerDeclarationPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getOfficialTranscriptPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCustodyRecordsPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getStatutoryDeclarationPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCopyOfParentIdPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getPassportSizedPhotosPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getDdoAssessmentPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCeoAssessmentPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCoAssessmentPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getProofOfInvestmentTransferredPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCeoNotesForAgentPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCeoAgentNotesPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCoAgentNotesPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getProofOfInvestmentPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getAgentInvestmentNotesPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getCertifiedCopyProfessionalCertificateMedicalExaminerPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getNetWorthDocumentSupportPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getProfessionalCertificateTranslatorPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getApostillePathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getProfessionalCertificateNotaryPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getProfessionalCertificateAttorneyPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getProfessionalCertificateOathsCommissionerPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getSourceOfFundsPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getLawEnforcementReportPathAttribute($value)
  {
    return $this->generateFilePath($value);
  }

  protected function getAddonAttribute($value)
  {
      $paths = [];

      if ($value !== null && is_string($value)) {
          $decoded = json_decode($value, true);


          if (is_array($decoded)) {
              foreach ($decoded as $key => $path) {
                  $paths[] = $this->generateFilePath($path);
              }
          }
      }

      return  count($paths)>0? $paths: null ;
  }

}
