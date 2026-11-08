<?php
	error_reporting(0);
	include("connect.php");
	?>
	<div id="searchModal" class="modal fade" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<span class="h3" style="text-align: left">Subscribers</span>
			   <button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>
			<div class="modal-body">

<?php
	$output="";
	if(isset($_GET['searchBtn'])){
		$search=$_GET['search'];

		$searchUser = mysqli_query($connect_to_server, "SELECT * FROM users WHERE user_firstname LIKE '%$search%' OR user_lastname LIKE '%$search%' OR user_mobile LIKE '%$search%'");
		$x=mysqli_num_rows($searchUser);
		echo "$x";
		
				while ($row = mysqli_fetch_assoc($searchUser)){
					$fname=$row['user_firstname'];
					$phone=$row['user_mobile'];
					$email=$row['user_email'];
					$waddress=$row['user_address'];
					$wlga=$row['user_lga'];
					$d = $row['reg_time'];
					$date = date("jS F, Y", $d);
					$stat=$row['status'];
			}
		}
?>
<div class="table-responsive">
	<!-- Projects table -->
	<table class="table align-items-center table-flush">
		<thead class="thead-light">
			<tr>
				<th scope="col" class="col-xl-2">NAME</th>
				<th scope="col" class="col-xl-1">PHONE NUMBER</th>
				<th scope="col" class="col-xl-2">EMAIL</th>
				<th scope="col" class="col-xl-3">W. ADDRESS</th>
				<th scope="col" class="col-xl-1">W. LGA</th>
				<th scope="col" class="col-xl-1">DATE</th>
				<th scope="col" class="col-xl-1">STATUS</th>
				<th scope="col" class="col-xl-1"></th>
			</tr>
		</thead>
		<tbody style="text-transform:capitalize;">
				<td>
					<?php echo "$fname"; ?>
				</td>
				<td>
					<?php echo "$phone"; ?>
				</td>
				<td>
					<?php echo "$email"; ?>
				</td>
				<td>
					<?php echo "$waddress"; ?>
				</td>
				<td>
					<?php echo "$wlga"; ?>
				</td>
				<td>
					<?php echo "$date"; ?>
				</td>
				<td>
					<?php echo "$stat"; ?>
				</td>
		</tbody>
	</table>
</div>

</div>
</div>
</div>
</div>
