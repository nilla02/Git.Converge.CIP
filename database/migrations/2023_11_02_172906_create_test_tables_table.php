<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestTablesTable extends Migration
{
    public function up()
    {
        Schema::create('test_tables', function (Blueprint $table) {
            $table->id();
            $table->text('agency')->nullable();
            $table->text('ref_number')->nullable();
            $table->unsignedBigInteger('agent_id')->nullable();//agent id
            $table->text('first_name')->nullable();
            $table->text('last_name')->nullable();
            $table->unsignedBigInteger('status_id')->default(13);
            $table->text('file_path')->nullable();
            $table->text('Region')->nullable();
            $table->text('country_of_birth')->nullable();
<<<<<<< Updated upstream
 $table->text('country_of_issue')->nullable();
            $table->integer('payment_amount')->nullable();
=======
            $table->text('country_of_issue')->nullable();
            $table->text('payment_amount')->nullable();
>>>>>>> Stashed changes
            $table->text('passport_number')->nullable();
            $table->text('visa_Number')->nullable();
            $table->date('visa_issue_date')->nullable();
            $table->date('visa_expiration_date')->nullable();
            $table->date('date_of_payment')->nullable();
            $table->unsignedBigInteger('country_id')->nullable();
            $table->text('co_id')->nullable();
            $table->text('acc_id')->nullable();
            $table->text('risk_id')->nullable();
            $table->text('risk_level')->nullable();
            $table->text('accounts_approval')->nullable();
            $table->text('promoter_id')->nullable();
            $table->text('ddo_id')->nullable();
            $table->text('ceo_id')->nullable();
            $table->text('ceo_notes')->nullable();
            $table->text('co_notes')->nullable();
            $table->text('ddo_notes')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->text('marriage_Status')->nullable();
            $table->integer('accompanying_dependents')->nullable();
            $table->text('principle_applicant_id')->nullable();
            $table->text('gender')->nullable();
            $table->integer('time_to_completion')->nullable()->default(90);
            $table->text('type_of_applicant')->nullable();
            $table->text('type_of_investment')->nullable();
            $table->text('proof_of_payment_path')->nullable();
            $table->text('document_checklist_path')->nullable();
            $table->text('authorized_agent_form_path')->nullable();
            $table->text('alternative_citizenship_path')->nullable();
            $table->text('confirmation_form_path')->nullable();
            $table->text('registration_application_path')->nullable();
            $table->text('birth_record_path')->nullable();
            $table->text('name_change_path')->nullable();
            $table->text('citizenship_certificate_path')->nullable();
            $table->text('residence_card_path')->nullable();
            $table->text('military_records_path')->nullable();
            $table->text('photograph_certificate_path')->nullable();
            $table->text('national_id_path')->nullable();
            $table->text('current_passport_pages_path')->nullable();
            $table->text('proof_of_residence_path')->nullable();
            $table->text('marriage_certificate_path')->nullable();
            $table->text('divorce_decree_path')->nullable();
            $table->text('curriculum_vitae_path')->nullable();
            $table->text('professional_reference_path')->nullable();
            $table->text('bank_reference_path')->nullable();
            $table->text('sworn_affidavit_financial_path')->nullable();
            $table->text('sworn_affidavit_spouse_path')->nullable();
            $table->text('academic_certificates_path')->nullable();
            $table->text('police_certificates_path')->nullable();
            $table->text('visas_path')->nullable();
            $table->text('medical_examiner_declaration_path')->nullable();
            $table->text('official_transcripts_path')->nullable();
            $table->text('custody_records_path')->nullable();
            $table->text('statutory_declaration_path')->nullable();
            $table->text('copy_of_parent_id_path')->nullable();
            $table->text('passport_sized_photos_path')->nullable();
            $table->text('principal_applicant_id')->nullable();
            $table->text('citizenship_certificate_id')->nullable();
            $table->text('closing_notes')->nullable();
            $table->text('acc_notes')->nullable();
            $table->text('ddo_assessment_path')->nullable();
            $table->text('law_enforcement_report_path')->nullable();
            $table->text('ceo_assessment_path')->nullable();
            $table->text('co_assessment_path')->nullable();
            $table->integer('investment_amount')->nullable();
            $table->text('spouse')->nullable();
            $table->text('qualifying_dependents')->nullable();
            $table->text('proof_of_investment_transferred_path')->nullable();
            $table->text('ceo_notes_for_agent')->nullable();
            $table->text('ceo_agent_notes')->nullable();
            $table->text('co_agent_notes')->nullable();
            $table->dateTime('accepted_for_processing_date')->nullable();
            $table->text('proof_of_investment_path')->nullable();
            $table->text('agent_investment_notes')->nullable();
            $table->text('certified_copy_professional_certificate_medical_examiner_path')->nullable();
            $table->text('net_worth_document_support_path')->nullable();
            $table->text('professional_certificate_translator_path')->nullable();
            $table->text('apostille_path')->nullable();
            $table->text('professional_certificate_notary_path')->nullable();
            $table->text('professional_certificate_attorney_path')->nullable();
            $table->text('professional_certificate_oaths_commissioner_path')->nullable();
            $table->text('source_of_funds_path')->nullable();
            $table->dateTime('source_of_funds_docs_sent_date')->nullable();
            $table->dateTime('processing_fee_received_date')->nullable();
            $table->text('preprocessing')->nullable();
            $table->text('law_enforcement_sent')->nullable();
            $table->dateTime('preprocess_law_enforcement_docs_sent_date')->nullable();
            $table->text('proceed_due_diligence')->nullable();
            $table->dateTime('proceed_due_diligence_docs_sent_date')->nullable();
            $table->dateTime('accounts_approval_date')->nullable();
            $table->text('addon')->nullable();
            $table->dateTime('processing_fees_received_date')->nullable();
            $table->dateTime('open_at')->nullable();
            $table->dateTime('risk_level_received_date')->nullable();
            $table->foreign('agent_id')->references('id')->on('users');
            $table->foreign('status_id')->references('id')->on('status');
            $table->foreign('country_id')->references('id')->on('countries');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('test_tables');

    }
}
