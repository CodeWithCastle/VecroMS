<?php
    error_reporting(0);
    include("assets/php/connect.php");
    include("connect.php");
?>
      
      <?php
        $getUserDetails = mysqli_query($connect_to_server, "SELECT * FROM users ORDER by reg_time DESC
        ");
        $x = 0;

        if(mysqli_num_rows($getUserDetails)>0){
          while($info = mysqli_fetch_assoc($getUserDetails)){
            $idr = bin2hex($info['user_id']);
            $d = $info['reg_time'];
            $e = date("jS F, Y", $d);
      ?>

      <?php
        if($info['status'] == "active"){
      ?>
        <tr title="click to view user" value="green" style="color:green;">
      <?php
        }
        else if($info['status'] == "suspended"){
      ?>
        <tr title="click to view user" value="green" style="color:orange;">
      <?php
        }
      ?>
          <td onclick="showModal();getUserId('<?php echo($idr); ?>')"><?php echo($info['user_firstname']." ".$info['user_lastname']); ?></td>
          <td onclick="showModal();getUserId('<?php echo($idr); ?>')"><?php echo($info['user_mobile']); ?></td>
          <td onclick="showModal();getUserId('<?php echo($idr); ?>')" style="text-transform:lowercase;"><?php echo($info['user_email']); ?></td>
          <td onclick="showModal();getUserId('<?php echo($idr); ?>')"><?php echo($info['user_address']); ?></td>
          <td onclick="showModal();getUserId('<?php echo($idr); ?>')"><?php echo($info['user_lga']); ?></td>
          <td onclick="showModal();getUserId('<?php echo($idr); ?>')"><?php echo($e); ?></td>
          <td onclick="showModal();getUserId('<?php echo($idr); ?>')" style="text-transform:uppercase;font-weight:bold;"><?php echo($info['status']); ?></td>
          
          <?php
            if($info['status'] == "active"){
          ?>
            <td style="text-align:center;z-index:2;"><div class="button btn_warning" title="click to suspend user account" onclick="getSuspendUser(<?php echo $idr; ?>)"><span class="h2"><i class="ni ni-fat-remove text-red"></i></span></div></td>
          <?php
            }
            else if($info['status'] == "suspended"){
          ?>
            <td style="text-align:center;z-index:2;"><div class="button btn_success" title="click to activate user account" onclick="getActivateUser(<?php echo $idr; ?>)"><span class="h2"><i class="ni ni-check-bold text-green"></i></span></div></td>
          <?php
            }
          ?>
        </tr>

        <?php
          }
        }
        else{
          echo("<tr scope='row'></tr><th colspan='+8' style='text-align:center; color:red;'>No Users to display</th></tr>");
        }
        ?>
        

<?php
  // include("assets/php/disconnect.php");
?>