<div class="container">

    <div class="panel-heading">
        <div class="panel-title text-center">
            <h1 class="title">เกมทายตัวเลข</h1>
            <hr />
        </div>
    </div> 

    <div class="panel">
        <div class="panel-body">
            <div class="row">
                <div class="col-sm-10">
                    <button class="btn btn-lg btn-block btn-warning" id="startBtn" >
                        <i class="fa fa-gamepad fa-2x" aria-hidden="true"></i>
                        <br><span>Start Game</span>
                    </button>
                </div>
                <div class="col-sm-2">
                    <button class="btn btn-lg btn-block btn-success" id="restartBtn" name="restartBtn" >
                        <i class="fa fa-refresh fa-2x" aria-hidden="true"></i>
                        <br><span>เอาใหม่</span>
                    </button>
                </div>
            </div>
            <br>
            <form name="frm" class="form">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-sm-10">
                                <div class="form-group">
                                    <label class="col-sm-3 control-label" for="show_store_type_id">ประเภท :</label>
                                    <div class="col-sm-8" >
                                        <input type="number" pattern="[0-9]*" inputmode="numeric" name="user-guess" id="user-guess" min="0" max="9999" maxlength="4" class="form-control" placeholder="ใส่ตัวเลข 4 ตัว" autocomplete="off">
                                        <!--<input type="input" name="user-guess" id="user-guess" maxlength="4" class="form-control" placeholder="ใส่ตัวเลข 4 ตัว" autocomplete="off"/>-->
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <button class="btn btn-lg btn-block btn-info" id="sendBtn" name="sendBtn" >
                                    <i class="fa fa-send fa-1x" aria-hidden="true"></i>
                                    <br><span>Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div id="guess-check">
                <table class="table">
                    <thead>
                    <th>User guess</th>
                    <th>Guess Result</th>
                    <th></th>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
</div>