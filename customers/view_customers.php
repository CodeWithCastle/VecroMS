<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Dashboard">
  <meta name="author" content="Emmanuel.O">
  <title>Autopointe Management Software</title>
  <!-- Favicon -->
  <link href="../assets/img/brand/favicon.png" rel="icon" type="image/png">
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
  <!-- Icons -->
  <link href="../assets/vendor/nucleo/css/nucleo.css" rel="stylesheet">
  <link href="../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
  <!-- CSS -->
  <link type="text/css" href="../assets/css/ams.css?v=1.0.0" rel="stylesheet">
</head>

<body>
  <!-- Sidenav -->
  <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Brand -->
      <a class="navbar-brand pt-0" href="../index.php">
        <img src="../assets/img/brand/blue.png" class="navbar-brand-img" alt="...">
      </a>
      <!-- User -->
      <ul class="nav align-items-center d-md-none">
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="ni ni-bell-55"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
            <a class="dropdown-item" href="#">Job Bank</a>
            <a class="dropdown-item" href="#">Messages</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Dashboard</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="../assets/img/theme/team-1-800x800.jpg">
              </span>
            </div>
          </a>
           <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
            <div class=" dropdown-header noti-title">
              <h6 class="text-overflow m-0">Welcome!</h6>
            </div>
            <a href="../user" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My profile</span>
            </a>
            <a href="../user/settings.php" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>Settings</span>
            </a>
            <a href="../index.php" class="dropdown-item">
              <i class="ni ni-calendar-grid-58"></i>
              <span>Activity</span>
            </a>
            <a href="../user/messages.php" class="dropdown-item">
              <i class="ni ni-support-16"></i>
              <span>Message</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#!" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>
      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="sidenav-collapse-main">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="../index.php">
                <img src="../assets/img/brand/blue.png">
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-4 mb-3 d-md-none">
          <div class="input-group input-group-rounded input-group-merge">
            <input type="search" class="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <span class="fa fa-search"></span>
              </div>
            </div>
          </div>
        </form>
        <!-- Navigation -->
	    <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="../index.php">
              <i class="ni ni-tv-2 text-primary"></i> Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../jobs">
            <i class="ni ni-folder-17 text-red"></i> Job Bank
            </a>
          </li>
		  <li class="nav-item">
            <a class="nav-link" href="../bookings">
              <i class="ni ni-book-bookmark text-blue"></i> Bookings
            </a>
          </li>	
          <li class="nav-item">	
            <a class="nav-link" href="../customers">
              <i class="ni ni-single-02 text-yellow"></i> Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../vehicles">
              <i class="ni ni-cart text-green"></i> Vehicles
            </a>
          </li>
          <li class="nav-item dropdown">
			  <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="ni ni-bullet-list-67 text-red"></i> Products
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
				<a class="dropdown-item" href="../projects/garagepro">
				  <i class="ni ni-settings text-samonda"></i> Garage Pro
				</a>
				<a class="dropdown-item" href="../projects/autovin">
				  <i class="ni ni-zoom-split-in text-blue"></i> AUTOVIN
				</a>
				<a class="dropdown-item" href="../projects/lagride">
				  <i class="ni ni-bus-front-12 text-green"></i> LAGRIDE
				</a>
			  </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../reports">
              <i class="ni ni-key-25 text-info"></i> Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../manage">
              <i class="ni ni-circle-08 text-pink"></i> Manage Workshop
            </a>
          </li>
        </ul>
        <!-- Divider -->
        <hr class="my-3">
        <!-- Heading -->
        <h6 class="navbar-heading text-muted">Settings</h6>
        <!-- Navigation -->
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a class="nav-link" href="../services">
              <i class="ni ni-spaceship"></i> Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../user">
              <i class="ni ni-circle-08 text-green"></i> User
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../user/settings.php">
              <i class="ni ni-ui-04 text-blue"></i> Account Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Main content -->
  <div class="main-content">
    <!-- Top navbar -->
    <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div class="container-fluid">
        <!-- Brand --><a class="h2 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.php">CUSTOMERS</a><!-- Form -->
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
          <div class="form-group mb-0">
            <div class="input-group input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
              <input class="form-control" placeholder="Search" type="text">
            </div>
          </div>
        </form>
        <!-- User -->
        <ul class="navbar-nav align-items-center d-none d-md-flex">
          <li class="nav-item dropdown">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="../assets/img/theme/team-4-800x800.jpg">
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm  font-weight-bold">Emmanuel</span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div class=" dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="#" class="dropdown-item">
                <i class="ni ni-single-02"></i>
                <span>User Account</span>
              </a>
              <a href="#" class="dropdown-item">
                <i class="ni ni-settings-gear-65"></i>
                <span>User Settings</span>
              </a>
              <a href="#" class="dropdown-item">
                <i class="ni ni-calendar-grid-58"></i>
                <span>User Activity</span>
              </a>
              <a href="../examples/profile.html" class="dropdown-item">
                <i class="ni ni-support-16"></i>
                <span>Messages</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Header -->
    <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
      <div class="container-fluid">
        <div class="header-body">
          <!-- Card stats -->
			          <div class="row">
            <div class="col-xl-12 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">CUSTOMERS DETAILS</h5>
                      <p></p>
                      <div class="row">
						<div class="col-xl-3"><span class="h4"><label>Company Name</label>: <input class="form-control" type="text" name="company_name" disabled></span></div>
					  <div class="col-xl-3"><span class="h4"><label>Preferred Mode of Contact</label>: <select class="form-control" name="mode_of_contact" disabled>
						  <option>E-Mail</option>
						  <option>SMS</option></select>
						  </span>
					    </div>
					  	<div class="col-xl-3"><span class="h4"><label>First Name</label>: <input class="form-control" type="text" name="first_name" disabled></span></div>
					  <div class="col-xl-3"><span class="h4"><label>Last Name</label>: <input class="form-control" type="text" name="last_name" disabled></span></div>  
						</div>
						<br>
						<div class="row">
						<div class="col-xl-3"><span class="h4"><label>Phone Number</label>: <input class="form-control" type="text" maxlength="11" name="first_name" disabled></span></div>
					  	<div class="col-xl-3"><span class="h4"><label>Email Address</label>: <input class="form-control" type="email" name="last_name" disabled></span></div>
						<div class="col-xl-3"><span class="h4"><label>Address</label>: <input class="form-control" type="textarea" name="first_name" disabled></span></div>
					  <div class="col-xl-3"><span class="h4"><label>Local Goverment Area</label>: <select class="form-control" name="LGA_Address" disabled>
						    <option>Agege</option>
							<option>Alimosho</option>
							<option>Apapa</option>
							<option>Ifako-Ijaye</option>
							<option>Ikeja</option>
							<option>Kosofe</option>
							<option>Mushin</option>
							<option>Oshodi-Isolo</option>
							<option>Shomolu</option>
							<option>Eti-Osa</option>
							<option>Lagos Island</option>
							<option>Lagos Mainland</option>
							<option>Surulere</option>
							<option>Ojo</option>
							<option>Ajeromi-Ifelodun</option>
							<option>Amuwo-Odofin</option>
							<option>Badagry</option>
							<option>Ikorodu</option>
							<option>Ibeju-Lekki</option>
							<option>Epe</option>
						  </select></span></div>
					  </div>
                    </div>
                  </div>
					<br>
                </div>
              </div>
            </div>            
          </div>
 
		  </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--7">
      <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <div class="card shadow">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h5 class="text-uppercase text-muted mb-0">Customer Vehicles</h5>
                </div>
                <div class="col text-right">
                  <a href="#!" class="btn btn-sm btn-primary">SEE ALL</a>
				  <a href="#" class="btn btn-sm btn-primary">EXPORT</a>
                </div>
              </div>
            </div>
			  <div class="row" style="padding-left: 20px; padding-right: 20px; padding-bottom: 20px">
			  	<div class="col">
					<h5>FILTERS</h5>
					 <div class="row">
					  	<div class="col-xl-3"><span class="h5"><label>Registration Number</label>: <input class="form-control" type="text" name="company_name"></span></div><div class="col-xl-3"><span class="h5"><label>Date</label>: <input class="form-control" type="date" name="company_name"></span></div><div class="col-xl-3" style="padding-top: 30px;"><a href="#" class="btn btn-md btn-primary">FILTER</a></div>
				  </div>
			    </div>
			  </div>
            <div class="table-responsive">
              <!-- Projects table -->
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="col-xl-2">REG NUMBER</th>
                    <th scope="col" class="col-xl-1">MAKE</th>
                    <th scope="col" class="col-xl-3">MODEL</th>
                    <th scope="col" class="col-xl-3">VIN/CHASIS</th>
					<th scope="col" class="col-xl-1">YEAR</th>
					<th scope="col" class="col-xl-1">BODY TYPE</th>
					<th scope="col" class="col-xl-1"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
					   SMK111FR
                    </th>
                    <td>
                      TOYOTA
                    </td>
                    <td>
                      HIGHLANDER
                    </td>
                    <td>
                      JTH12345678901234
                    </td>
					<td>
						2008
					</td>
					  <td>
					  	SUV
					  </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr>
                  <tr>
                    <th scope="row">
					   SMK111FR
                    </th>
                    <td>
                      TOYOTA
                    </td>
                    <td>
                      HIGHLANDER
                    </td>
                    <td>
                      JTH12345678901234
                    </td>
					<td>
						2008
					</td>
					  <td>
					  	SUV
					  </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr><tr>
                    <th scope="row">
					   SMK111FR
                    </th>
                    <td>
                      TOYOTA
                    </td>
                    <td>
                      HIGHLANDER
                    </td>
                    <td>
                      JTH12345678901234
                    </td>
					<td>
						2008
					</td>
					  <td>
					  	SUV
					  </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr><tr>
                    <th scope="row">
					   SMK111FR
                    </th>
                    <td>
                      TOYOTA
                    </td>
                    <td>
                      HIGHLANDER
                    </td>
                    <td>
                      JTH12345678901234
                    </td>
					<td>
						2008
					</td>
					  <td>
					  	SUV
					  </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr><tr>
                    <th scope="row">
					   SMK111FR
                    </th>
                    <td>
                      TOYOTA
                    </td>
                    <td>
                      HIGHLANDER
                    </td>
                    <td>
                      JTH12345678901234
                    </td>
					<td>
						2008
					</td>
					  <td>
					  	SUV
					  </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
	  <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <div class="card shadow">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h5 class="text-uppercase text-muted mb-0">Customer INVOICE &amp; payments</h5>
                </div>
                <div class="col text-right">
                  <a href="#!" class="btn btn-sm btn-primary">SEE ALL</a>
				  <a href="#" class="btn btn-sm btn-primary">EXPORT</a>
                </div>
              </div>
            </div>
			  <div class="row" style="padding-left: 20px; padding-right: 20px; padding-bottom: 20px">
			  	<div class="col">
					 <div class="row">
					  	<div class="col-xl-3"><span class="h5"><label>Status</label>: <select class="form-control" name="invoice_status"><option>Paid</option><option>Not Paid</option></select></span></div><div class="col-xl-3"><span class="h5"><label>Date</label>: <input class="form-control" type="date" name="company_name"></span></div><div class="col-xl-3" style="padding-top: 30px;"><a href="#" class="btn btn-md btn-primary">FILTER</a></div>
				  </div>
			    </div>
			  </div>
            <div class="table-responsive">
              <!-- Projects table -->
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="col-xl-1">DATE</th>
                    <th scope="col" class="col-xl-5">DESCRIPTION</th>
                    <th scope="col" class="col-xl-3">AMOUNT</th>
                    <th scope="col" class="col-xl-2">STATUS</th>
					<th scope="col" class="col-xl-1"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
					   27/06/2019
                    </th>
                    <td>
                      Payment for the servicing of Engine Oil for Toyota Highlander 
                    </td>
                    <td>
                      N 20,000
                    </td>
                    <td>
                      Paid
                    </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr><tr>
                    <th scope="row">
					   27/06/2019
                    </th>
                    <td>
                      Payment for the servicing of Engine Oil for Toyota Highlander 
                    </td>
                    <td>
                      N 20,000
                    </td>
                    <td style="color: red;">
                      Not Paid
                    </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-check-bold text-green"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr><tr>
                    <th scope="row">
					   27/06/2019
                    </th>
                    <td>
                      Payment for the servicing of Engine Oil for Toyota Highlander 
                    </td>
                    <td>
                      N 20,000
                    </td>
                    <td>
                      Paid
                    </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr><tr>
                    <th scope="row">
					   27/06/2019
                    </th>
                    <td>
                      Payment for the servicing of Engine Oil for Toyota Highlander 
                    </td>
                    <td>
                      N 20,000
                    </td>
                    <td style="color: red;">
                      Not Paid
                    </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-check-bold text-green"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
	  <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <div class="card shadow">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h5 class="text-uppercase text-muted mb-0">Customer Bookings</h5>
                </div>
                <div class="col text-right">
                  <a href="#!" class="btn btn-sm btn-primary">SEE ALL</a>
				  <a href="#" class="btn btn-sm btn-primary">EXPORT</a>
                </div>
              </div>
            </div>
			  <div class="row" style="padding-left: 20px; padding-right: 20px; padding-bottom: 20px">
			  	<div class="col">
					 <div class="row">
					  	<div class="col-xl-3"><span class="h5"><label>Status</label>: <select class="form-control" name="invoice_status"><option>Completed</option><option>Pending</option><option>Awaiting Payments</option></select></span></div><div class="col-xl-3"><span class="h5"><label>Date</label>: <input class="form-control" type="date" name="company_name"></span></div><div class="col-xl-3" style="padding-top: 30px;"><a href="#" class="btn btn-md btn-primary">FILTER</a></div>
				  </div>
			    </div>
			  </div>
            <div class="table-responsive">
              <!-- Projects table -->
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="col-xl-1">DATE</th>
                    <th scope="col" class="col-xl-5">BOOKING DESCRIPTION</th>
                    <th scope="col" class="col-xl-3">AMOUNT</th>
                    <th scope="col" class="col-xl-2">STATUS</th>
					<th scope="col" class="col-xl-1"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
					   27/06/2019
                    </th>
                    <td>
                      Servicing of Engine Oil for Toyota Highlander 
                    </td>
                    <td>
                      N 20,000
                    </td>
                    <td>
                      Completed
                    </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr><tr>
                    <th scope="row">
					   27/06/2019
                    </th>
                    <td>
                      Servicing of Engine Oil for Toyota Highlander 
                    </td>
                    <td>
                      N 20,000
                    </td>
                    <td style="color: red;">
                      Pending
                    </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-check-bold text-green"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr><tr>
                    <th scope="row">
					   27/06/2019
                    </th>
                    <td>
                      Servicing of Engine Oil for Toyota Highlander 
                    </td>
                    <td>
                      N 20,000
                    </td>
                    <td style="color: darkgoldenrod;">
                      Awaiting Payment
                    </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr><tr>
                    <th scope="row">
					   27/06/2019
                    </th>
                    <td>
                      Servicing of Engine Oil for Toyota Highlander 
                    </td>
                    <td>
                      N 20,000
                    </td>
                    <td style="color: red;">
                      Not Paid
                    </td>
					  <td align="center">
					  	<span class="h2"><a href="#"><i class="ni ni-check-bold text-green"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-zoom-split-in text-blue"></i></a>&nbsp;&nbsp;<a href="#"><i class="ni ni-fat-remove text-red"></i></a></span>
					  </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
		
      <!-- Footer -->
      <footer class="footer">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
              &copy; 2019 <a href="#" class="font-weight-bold ml-1" target="_blank">AMS</a>
            </div>
          </div>
          <div class="col-xl-6">
            <ul class="nav nav-footer justify-content-center justify-content-xl-end">
              <li class="nav-item">
                <a href="#" class="nav-link" target="_blank">Dashboard</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link" target="_blank">Job Bank</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link" target="_blank">Reports</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link" target="_blank">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
<!-- Scripts -->
  <!-- Core -->
  <script src="../assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Optional JS -->
  <script src="../assets/vendor/chart.js/dist/Chart.min.js"></script>
  <script src="../assets/vendor/chart.js/dist/Chart.extension.js"></script>
  <!-- JS -->
  <script src="../assets/js/ams.js?v=1.0.0"></script>
</body>

</html>