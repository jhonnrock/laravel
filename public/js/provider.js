$(document).on("ready", () => {
    console.log("testss");
    saveProvider();
    createFormulary();
});

const saveProvider = () => {
    console.log("save data");
    //   $.ajax({
    //       url:'',
    //       type:'GET',
    //       success:(data)=>{
    //           console.log(data);
    //           const result=JSON.parse(data);
    //           createFormulary(result);
    //       }
    //   })
};
const createFormulary = () => {
    const create = $("#container_provider");
    create.empty();
    const form_provider = `
            <form  id="myformulary">
                    <div className="form-group">
                        <label htmlFor="">first name</label><input type="text" name="firstname" id="" placeholder="Enter your firstname"
                        id="firstname"
                        class="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Last name</label><input type="text" name="lastname" id="" placeholder="Enter your Last name"
                        id="lastname"
                        class="form-control"/>
                    </div>

                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
        </form>
        `;
    create.append(form_provider);
};

const submit_provider=()=>{
    $('#myformulary').on('submit',(res)=>{
        res.preventDefault();
        let datas=new FormDatas();
        datas.append('firstname',$('#firstname').val());
        datas.append('lastname',$('#lastname').val());
        // $val_provider=$(this).serialize();


    $.ajax(

        {url:'venta',
        type: 'POST',
        contentType: false,
        processData: false,
        dataType:'json',
        data:datas,
        success:(info)=>{
            console.log(info);
        }

    }
    )

});
}
