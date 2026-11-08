<div id="header">
  <div id="acct_name" class="txt_success">
    <span>create new user account</span>
  </div>
</div>
<div id="body">
  <form id="form_id" method="post" action="registerUser()">
    <div id="body">
      <div id="container_wrap">
        <div id="content_wrap">
          <label>Firsrtname :</label>
          <input type="text" placeholder="" id="reg_fname" class="" name="fname" autofocus="" />
        </div>
        <div id="content_wrap">
          <label>Lastname :</label>
          <input type="text" placeholder="" id="reg_lname" class="" name="lname" autofocus="" />
        </div>
        <div id="content_wrap">
          <label>Mobile :</label>
          <input type="text" placeholder="" id="reg_mobile" class="" name="mobile" autofocus="" />
        </div>
        <div id="content_wrap">
          <label>Mail :</label>
          <input type="mail" placeholder="" id="reg_mail" class="" name="mail" autofocus="" />
        </div>
        <div id="content_wrap">
          <label>Workshop Address :</label>
          <input type="text" placeholder="" id="reg_address" class="" name="address" autofocus="" />
        </div>
        <div id="content_wrap">
          <label>Workshop L.G.A. :</label>
          <input type="text" placeholder="" id="reg_lga" class="" name="lga" />
        </div>
      </div>
      <br>
      <div id="content_wrap" style="background:;display:flex;flex-wrap:wrap;justify-content:center;">
        <!-- <input type="submit" id="" class="button btn_success" name="login" value="create account" onclick=""/> -->
        <input type="button" id="" class="button btn_success" name="login" value="create account" onclick="registerUser()"/>
      </div>
    </div>
  </form>
</div>