<?php

use App\Http\Controllers\ActivityLogController;
use App\Http\Controllers\TestTableController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TestTableTwoController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\NotificationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GroupTableController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('uploads/{path}',function(){
    return "hello";
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'forms'=>Route::has('Forms'),
    ]);
});

//routes
// route::get('/home',[RoleController::class,'index2']);

// routes/web.php or routes/api.php
Route::post('/send-email', [TestTableController::class, 'store'])->name('TestTable.store');

Route::put('/user/{id}/edit', [UserController::class, 'update'])->name('user.update');
Route::get('/user/{id}/edit', [UserController::class, 'show'])->name('user.show');


Route::post('/mark-as-read/{notification}',[NotificationController::class,'markAsRead'])->name('markAsRead');

Route::get('/notification-count', [NotificationController::class, 'getNotificationCount'])->name('getNotificationCount');


Route::post('/TestTable/store', [TestTableController::class, 'store'])->name('TestTable.store');
Route::post('/GroupModel/store', [GroupTableController::class, 'store'])->name('GroupModel.store');
Route::post('/form-table-two/store', [TestTableTwoController::class, 'store'])->name('FormTableTwo.store');
Route::post('/activity_log/store', [ActivityLogController::class, 'store'])->name('activity_log.store');
Route::post('/users', [UserController::class, 'store'])->name('users.store');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/submissions', [TestTableController::class, 'index'])->name('Draft');
    Route::get('/App_Table', [TableController::class, 'index'])->name('ApplicationTable');
    Route::get('/submissions/{id}/edit', [TestTableController::class, 'show'])->name('submission.show');
    Route::get('Commission/submissions/{id}/edit', [TestTableController::class, 'show2'])->name('submission.show2');
    Route::put('/submissions/{id}/edit', [TestTableController::class, 'update'])->name('submission.update');
    Route::put('Commission/submissions/{id}/edit', [TestTableController::class, 'update2'])->name('submission.update2');
    Route::put('ddo/assign/submissions/{id}/edit', [TestTableController::class, 'assignddo'])->name('EditDDO.assignddo');
    Route::put('co/assign/submissions/{id}/edit', [TestTableController::class, 'assignco'])->name('EditCO.assignco');
    Route::get('ddo/assign/submissions/{id}/edit', [TestTableController::class, 'show3'])->name('EditDDO.show');
    Route::get('co/assign/submissions/{id}/edit', [TestTableController::class, 'show4'])->name('EditCO.show');
    Route::get('/submissions/application_forms', [TableController::class, 'index'])->name('Table');
});

//dashboards
Route::get('/Web_Administrator/Dashboard', [TestTableController::class, 'webadmindb'])->name('wadb');

Route::get('/VerificationController/Dashboard', [TestTableController::class, 'Vcontroller'])->name('vc');

Route::get('ceo/dashboard', [TestTableController::class, 'Co'])->name('co');

Route::get('/accountant/dashboard', [TestTableController::class, 'accountsdb'], function () {
})->middleware(['auth', 'verified'])->name('acdb');

Route::get('/reports', [TestTableController::class, 'index4'])->name('report');

Route::get('/dashboard', [TestTableController::class, 'index2'], function () {
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/Forms', [UserController::class, 'index'], function () {
})->middleware(['auth', 'verified'])->name('Forms');
//ends
Route::get('/Application/Forms', function () {
    return Inertia::render('SLForm');
})->name('SLform');
//agent
Route::group(['middleware' => ['role:agents|website_admin']], function () {
    Route::get('/dashboard/application',  [TestTableController::class, 'create'])->middleware(['auth', 'verified'])->name('application.create');
    //forms

});
//Web admin Super Admin routes
Route::group(['middleware' => ['role:website_admin|role:super_administrators']], function () {

    Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {
        Route::get('/Group', [GroupTableController::class, 'index'])->name('GroupTB');
        Route::get('/Logs', [ActivityLogController::class, 'index'])->name('CipLogs');
        Route::get('/User/Table', [UserController::class, 'index'])->name('UserTable');
        Route::get('/User/Registration', [UserController::class, 'create'])->name('UserRegistration');
        Route::get('/Group/Registration', [GroupTableController::class, 'create'])->name('AgencyRegistration');

    });

});
Route::get('media/{file}', [MediaController::class, 'serve'])
->where(['file'=>'.*'])->middleware(['auth', 'verified']);





require __DIR__ . '/auth.php';

//Form routes

Route::group(['middleware' => ['auth']], function () {
    Route::resource('roles', RoleController::class);
    Route::resource('users', UserController::class);
});
