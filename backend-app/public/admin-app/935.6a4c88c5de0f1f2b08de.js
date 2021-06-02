(self.webpackChunkadmin_app=self.webpackChunkadmin_app||[]).push([[935],{7935:(t,e,n)=>{"use strict";n.r(e),n.d(e,{AdminModule:()=>yt});var i=n(1116),o=n(3337),a=n(5609),r=n(9199),c=function(t){return t[t.CREATING=1]="CREATING",t[t.UPDATING=2]="UPDATING",t[t.READONLY=3]="READONLY",t}({}),s=n(1041),l=n(2935),u=n(5366),g=n(529),d=n(2693);let m=(()=>{class t{constructor(t){this.http=t,this.images=[{name:"elephant",url:"https://res.cloudinary.com/devemg/image/upload/v1621289170/randomAQ/category-icons/022-elephant_qzrskn.png",id:"1"},{name:"heart",url:"https://res.cloudinary.com/devemg/image/upload/v1621289170/randomAQ/category-icons/021-heart_yu2e8e.png",id:"2"},{name:"crab",url:"https://res.cloudinary.com/devemg/image/upload/v1621289170/randomAQ/category-icons/020-crab_nbv3p5.png",id:"3"},{name:"boat",url:"https://res.cloudinary.com/devemg/image/upload/v1621289169/randomAQ/category-icons/019-boat_oai4ed.png",id:"4"},{name:"pig",url:"https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/010-pig_k5qkiw.png",id:"5"}]}getAllCategories(){return this.http.get(`${g.N.API_CATEGORIES}`).toPromise()}getCategory(t){return this.http.get(`${g.N.API_CATEGORIES}/${t}`).toPromise()}newCategory(t){return this.http.post(`${g.N.API_CATEGORIES}`,JSON.stringify(t)).toPromise()}updateCategory(t,e){return this.http.put(`${g.N.API_CATEGORIES}`,JSON.stringify(e)).toPromise()}deleteCategory(t){return this.http.delete(`${g.N.API_CATEGORIES}/${t}`).toPromise()}getImages(){return new Promise((t,e)=>{t(this.images)})}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(d.eN))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=n(7307),h=n(3070),f=n(9550),Z=n(3841),C=n(7064),y=n(4369);function _(t,e){if(1&t&&(u.TgZ(0,"mat-option",13),u.TgZ(1,"div",14),u._UZ(2,"img",15),u._uU(3),u.qZA(),u.qZA()),2&t){const t=e.$implicit;u.Q6J("value",t.id),u.xp6(2),u.s9C("alt",t.name),u.Q6J("src",t.url,u.LSH),u.xp6(1),u.hij(" ",t.name," ")}}function A(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-form-field",2),u.TgZ(1,"mat-label"),u._uU(2,"Image"),u.qZA(),u.TgZ(3,"mat-select",11),u.NdJ("valueChange",function(e){return u.CHM(t),u.oxw().changeSelectedImage(e)}),u.YNc(4,_,4,4,"mat-option",12),u.qZA(),u.TgZ(5,"mat-error"),u._uU(6,"Image is required"),u.qZA(),u.qZA()}if(2&t){const t=u.oxw();u.xp6(4),u.Q6J("ngForOf",t.images)}}function q(t,e){if(1&t&&(u.TgZ(0,"div",16),u.TgZ(1,"mat-label"),u._uU(2,"Current Image"),u.qZA(),u._UZ(3,"img",17),u.qZA()),2&t){const t=u.oxw();u.xp6(3),u.Q6J("src",t.image,u.LSH)}}function w(t,e){1&t&&(u.TgZ(0,"button",18),u._uU(1,"Cancel"),u.qZA())}function O(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"button",19),u.NdJ("click",function(){return u.CHM(t),u.oxw().update()}),u._uU(1,"Update"),u.qZA()}}function T(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"button",20),u.NdJ("click",function(){return u.CHM(t),u.oxw().save()}),u._uU(1,"Create"),u.qZA()}if(2&t){const t=u.oxw();u.Q6J("disabled",t.categoryForm.invalid)}}let b=(()=>{class t{constructor(t,e,n,i){this.formBuilder=t,this.catService=e,this.data=n,this.matDialgoRef=i,this.title="New Category",this.images=[],this.status=c.CREATING,this.image="",this.categoryForm=this.formBuilder.group({id:[],name:["",s.kI.required],description:["",s.kI.required],image:["",s.kI.required]})}ngOnInit(){this.status=null!=this.data?this.data.status:c.CREATING,this.status!=c.READONLY&&this.catService.getImages().then(t=>{this.images=t}).catch(t=>console.log(t)),this.status!=c.CREATING&&(this.categoryForm.patchValue(Object.assign({},this.data.category)),this.image=this.data.category.image),this.updateTitle()}updateTitle(){switch(this.status){case c.CREATING:this.title="New Category";break;case c.UPDATING:this.title="Update Category";break;case c.READONLY:this.title="Category"}}changeSelectedImage(t){let e=this.images.find(e=>e.id==t);this.image=e?e.url:""}save(){if(this.categoryForm.valid){let t=this.images.find(t=>t.id==this.categoryForm.value.image);this.catService.newCategory(Object.assign(Object.assign({},this.categoryForm.value),{image:t?t.url:""})).then(t=>this.matDialgoRef.close(!0)).catch(t=>this.matDialgoRef.close(!1))}}update(){if(this.categoryForm.valid){let t=this.images.find(t=>t.id==this.categoryForm.value.image),e=Object.assign(Object.assign({},this.categoryForm.value),{image:t?t.url:this.image});this.catService.updateCategory(this.categoryForm.value.id,e).then(t=>this.matDialgoRef.close(!0)).catch(t=>{this.matDialgoRef.close(!1)})}}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(s.qu),u.Y36(m),u.Y36(l.WI),u.Y36(l.so))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-single-category"]],decls:23,vars:9,consts:[["mat-dialog-title",""],[3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","type","text","placeholder","Name","required","","formControlName","name",3,"readonly"],["rows","4","matInput","","placeholder","Description","formControlName","description",3,"readonly"],["class","full-width","appearance","outline",4,"ngIf"],["class","image-stack",4,"ngIf"],[1,"modal-buttons"],["mat-button","","color","accent","mat-dialog-close","",4,"ngIf"],["mat-raised-button","","color","primary","type","submit",3,"click",4,"ngIf"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click",4,"ngIf"],["required","","formControlName","image",3,"valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"select-container"],[1,"select-img",3,"src","alt"],[1,"image-stack"],["alt","",3,"src"],["mat-button","","color","accent","mat-dialog-close",""],["mat-raised-button","","color","primary","type","submit",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"]],template:function(t,e){1&t&&(u.TgZ(0,"h1",0),u.TgZ(1,"mat-icon"),u._uU(2,"category"),u.qZA(),u._uU(3),u.qZA(),u.TgZ(4,"mat-dialog-content"),u.TgZ(5,"form",1),u.TgZ(6,"mat-form-field",2),u.TgZ(7,"mat-label"),u._uU(8,"Name "),u.qZA(),u._UZ(9,"input",3),u.TgZ(10,"mat-error"),u._uU(11,"Name is required"),u.qZA(),u.qZA(),u.TgZ(12,"mat-form-field",2),u.TgZ(13,"mat-label"),u._uU(14,"Description "),u.qZA(),u.TgZ(15,"textarea",4),u._uU(16," "),u.qZA(),u.qZA(),u.YNc(17,A,7,1,"mat-form-field",5),u.YNc(18,q,4,1,"div",6),u.qZA(),u.qZA(),u.TgZ(19,"mat-dialog-actions",7),u.YNc(20,w,2,0,"button",8),u.YNc(21,O,2,0,"button",9),u.YNc(22,T,2,1,"button",10),u.qZA()),2&t&&(u.xp6(3),u.hij(" ",e.title,""),u.xp6(2),u.Q6J("formGroup",e.categoryForm),u.xp6(4),u.Q6J("readonly",3==e.status),u.xp6(6),u.Q6J("readonly",3==e.status),u.xp6(2),u.Q6J("ngIf",3!=e.status),u.xp6(1),u.Q6J("ngIf",""!=e.image),u.xp6(2),u.Q6J("ngIf",3!=e.status),u.xp6(1),u.Q6J("ngIf",2==e.status),u.xp6(1),u.Q6J("ngIf",1==e.status))},directives:[l.uh,p.Hw,l.xY,s._Y,s.JL,s.sg,h.KE,h.hX,f.Nt,s.Fj,s.Q7,s.JJ,s.u,h.TO,i.O5,l.H8,Z.gD,i.sg,C.ey,y.lW,l.ZT],styles:[".select-img[_ngcontent-%COMP%]{width:40px;height:40px;padding-right:10px}.select-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.image-stack[_ngcontent-%COMP%]{display:flex;flex-direction:column}.image-stack[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:grey;padding-bottom:5px}.image-stack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px}"]}),t})();var x=n(3589),v=n(4311),k=n(7672);let N=(()=>{class t{transform(t){return t.length>200?t.slice(0,200)+"...":t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=u.Yjl({name:"shortDescription",type:t,pure:!0}),t})();function P(t,e){1&t&&(u.TgZ(0,"div",16),u._UZ(1,"mat-progress-spinner",17),u.qZA())}function M(t,e){1&t&&(u.TgZ(0,"th",18),u._uU(1," Name "),u.qZA())}function Q(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"td",19),u.TgZ(1,"a",20),u.NdJ("click",function(){const e=u.CHM(t).$implicit;return u.oxw().seeCategory(e)}),u._uU(2),u.qZA(),u.qZA()}if(2&t){const t=e.$implicit;u.xp6(2),u.Oqu(t.name)}}function U(t,e){1&t&&(u.TgZ(0,"th",18),u._uU(1," Image "),u.qZA())}function I(t,e){if(1&t&&(u.TgZ(0,"td",19),u._UZ(1,"img",21),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.Q6J("src",t.image,u.LSH)}}function D(t,e){1&t&&(u.TgZ(0,"th",18),u._uU(1," Description "),u.qZA())}function J(t,e){if(1&t&&(u.TgZ(0,"td",22),u._uU(1),u.ALo(2,"shortDescription"),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.hij(" ",u.lcZ(2,1,t.description)," ")}}function Y(t,e){1&t&&(u.TgZ(0,"th",18),u._uU(1," Options "),u.qZA())}function S(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"td",23),u.TgZ(1,"div",24),u.TgZ(2,"button",25),u.NdJ("click",function(){const e=u.CHM(t).$implicit;return u.oxw().updateCategory(e)}),u.TgZ(3,"mat-icon"),u._uU(4,"mode_edit"),u.qZA(),u.qZA(),u.TgZ(5,"button",26),u.NdJ("click",function(){const e=u.CHM(t).$implicit;return u.oxw().deleteCategory(e.id)}),u.TgZ(6,"mat-icon"),u._uU(7,"delete"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}}function E(t,e){1&t&&u._UZ(0,"tr",27)}function F(t,e){1&t&&u._UZ(0,"tr",28)}const R=function(){return[5,10,25,100]};let B=(()=>{class t{constructor(t,e,n){this.catService=t,this.matDialog=e,this.snackBar=n,this.displayedColumns=["name","image","description","options"],this.datasource=new r.by,this.loading=!1}ngOnInit(){this.loadDatasource()}loadDatasource(){this.loading=!0,this.catService.getAllCategories().then(t=>{this.datasource=new r.by(t),this.paginator&&(this.datasource.paginator=this.paginator),this.loading=!1}).catch(t=>console.log(t))}ngAfterViewInit(){}newCategory(){this.matDialog.open(b,{width:"60%"}).afterClosed().subscribe(t=>{t&&(this.snackBar.open("Category created!","Ok",{duration:2e3}),this.loadDatasource())},t=>this.snackBar.open("Cannot create category","Ok",{duration:2e3}))}updateCategory(t){this.matDialog.open(b,{width:"60%",data:{status:c.UPDATING,category:t}}).afterClosed().subscribe(t=>{t&&(this.snackBar.open("Category updated!","Ok",{duration:2e3}),this.loadDatasource())},t=>this.snackBar.open("Cannot update category","Ok",{duration:2e3}))}seeCategory(t){this.matDialog.open(b,{width:"60%",data:{status:c.READONLY,category:t}})}deleteCategory(t){this.catService.deleteCategory(t).then(t=>{this.snackBar.open("Category deleted!","Ok",{duration:2e3}),this.loadDatasource()}).catch(t=>this.snackBar.open("Cannot delete category","Ok",{duration:2e3}))}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(m),u.Y36(l.uw),u.Y36(x.ux))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-list-categories"]],viewQuery:function(t,e){if(1&t&&u.Gf(a.NW,5),2&t){let t;u.iGM(t=u.CRH())&&(e.paginator=t.first)}},decls:22,vars:6,consts:[[1,"options"],["mat-fab","","color","primary","aria-label","","matTooltip","New Category",3,"click"],[1,"table-responsive"],["style","display: flex; justify-content: center; align-items: center;",4,"ngIf"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","style","width: 10%;",4,"matCellDef"],["matColumnDef","image"],["matColumnDef","description"],["mat-cell","",4,"matCellDef"],["matColumnDef","options"],["mat-cell","","style","width: 15%;",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],[2,"display","flex","justify-content","center","align-items","center"],["color","primary","mode","indeterminate"],["mat-header-cell",""],["mat-cell","",2,"width","10%"],[1,"link",3,"click"],["alt","image",1,"image-element",3,"src"],["mat-cell",""],["mat-cell","",2,"width","15%"],[1,"row-buttons"],["mat-icon-button","","color","accent","aria-label","Update Category","matTooltip","Update Category",3,"click"],["mat-icon-button","","color","accent","aria-label","Delete category","matTooltip","Delete Category",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(u.TgZ(0,"div",0),u.TgZ(1,"button",1),u.NdJ("click",function(){return e.newCategory()}),u.TgZ(2,"mat-icon"),u._uU(3,"add"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(4,"div",2),u.YNc(5,P,2,0,"div",3),u.TgZ(6,"table",4),u.ynx(7,5),u.YNc(8,M,2,0,"th",6),u.YNc(9,Q,3,1,"td",7),u.BQk(),u.ynx(10,8),u.YNc(11,U,2,0,"th",6),u.YNc(12,I,2,1,"td",7),u.BQk(),u.ynx(13,9),u.YNc(14,D,2,0,"th",6),u.YNc(15,J,3,3,"td",10),u.BQk(),u.ynx(16,11),u.YNc(17,Y,2,0,"th",6),u.YNc(18,S,8,0,"td",12),u.BQk(),u.YNc(19,E,1,0,"tr",13),u.YNc(20,F,1,0,"tr",14),u.qZA(),u._UZ(21,"mat-paginator",15),u.qZA()),2&t&&(u.xp6(5),u.Q6J("ngIf",e.loading),u.xp6(1),u.Q6J("dataSource",e.datasource),u.xp6(13),u.Q6J("matHeaderRowDef",e.displayedColumns),u.xp6(1),u.Q6J("matRowDefColumns",e.displayedColumns),u.xp6(1),u.Q6J("pageSizeOptions",u.DdM(5,R)))},directives:[y.lW,v.gM,p.Hw,i.O5,r.BZ,r.w1,r.fO,r.Dz,r.as,r.nj,a.NW,k.Ou,r.ge,r.ev,r.XQ,r.Gk],pipes:[N],styles:[".options[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;padding-bottom:1em}.table-responsive[_ngcontent-%COMP%]{width:100%;overflow-y:auto;height:85%}.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}tbody[_ngcontent-%COMP%]{height:100%}.row-buttons[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.image-element[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px;width:50px;height:50px}"]}),t})();var G=n(3937),H=n(7112),j=n(168),L=n(667),$=n(2797);let z=(()=>{class t{constructor(t,e){this.router=t,this.authService=e}ngOnInit(){}logout(){this.authService.logout().finally(()=>{this.router.navigate(["/"])})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(o.F0),u.Y36(G.e))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-home"]],decls:41,vars:1,consts:[[1,"container-all","gradient"],[1,"menu"],["src","assets/img/title-white.svg","alt","randomAQ",1,"image"],[1,"right-menu"],["routerLink","/admin/categories"],["routerLink","/admin/questions"],[1,"clickable",3,"click"],[1,"menu-mobile",3,"click"],[1,"drawer-container",3,"hasBackdrop"],["mode","over",1,"drawer-mobile"],["drawer",""],["mat-list-item","","routerLink","/admin/categories",3,"click"],["mat-list-item","","routerLink","/admin/questions",3,"click"],["mat-list-item","",3,"click"],[1,"card"]],template:function(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div",0),u.TgZ(1,"mat-toolbar",1),u._UZ(2,"img",2),u.TgZ(3,"ul",3),u.TgZ(4,"li"),u.TgZ(5,"a",4),u.TgZ(6,"mat-icon"),u._uU(7,"category"),u.qZA(),u._uU(8,"Categories"),u.qZA(),u.qZA(),u.TgZ(9,"li"),u.TgZ(10,"a",5),u.TgZ(11,"mat-icon"),u._uU(12,"help"),u.qZA(),u._uU(13,"Questions"),u.qZA(),u.qZA(),u.TgZ(14,"li"),u.TgZ(15,"a",6),u.NdJ("click",function(){return e.logout()}),u.TgZ(16,"mat-icon"),u._uU(17,"logout"),u.qZA(),u._uU(18,"Exit"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(19,"a",7),u.NdJ("click",function(){return u.CHM(t),u.MAs(24).toggle()}),u.TgZ(20,"mat-icon"),u._uU(21,"menu"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(22,"mat-drawer-container",8),u.TgZ(23,"mat-drawer",9,10),u.TgZ(25,"mat-nav-list"),u.TgZ(26,"a",11),u.NdJ("click",function(){return u.CHM(t),u.MAs(24).close()}),u.TgZ(27,"mat-icon"),u._uU(28,"category"),u.qZA(),u._uU(29,"Categories"),u.qZA(),u.TgZ(30,"a",12),u.NdJ("click",function(){return u.CHM(t),u.MAs(24).close()}),u.TgZ(31,"mat-icon"),u._uU(32,"help"),u.qZA(),u._uU(33,"Questions"),u.qZA(),u.TgZ(34,"a",13),u.NdJ("click",function(){return e.logout()}),u.TgZ(35,"mat-icon"),u._uU(36,"logout"),u.qZA(),u._uU(37,"Exit"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(38,"mat-drawer-content"),u.TgZ(39,"mat-card",14),u._UZ(40,"router-outlet"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}2&t&&(u.xp6(22),u.Q6J("hasBackdrop",!0))},directives:[H.Ye,o.yS,p.Hw,j.kh,j.jA,L.Hk,L.Tg,j.LW,$.a8,o.lC],styles:[".menu[_ngcontent-%COMP%]{background-color:initial;display:flex;flex-direction:row;justify-content:space-between;height:10vh}.menu[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:15%}.menu[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]:hover{filter:drop-shadow(0 4px 4px black);cursor:pointer}.menu[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.menu[_ngcontent-%COMP%]   .menu-mobile[_ngcontent-%COMP%]{display:none;padding-right:5px}.menu[_ngcontent-%COMP%]   .menu-mobile[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:35px;width:35px;height:35px}.drawer-container[_ngcontent-%COMP%]{width:100%;height:90vh;background-color:initial}.drawer-mobile[_ngcontent-%COMP%]{width:100%;background-color:#000000ba}.drawer-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-weight:lighter;font-size:20px;padding-top:10px;padding-bottom:10px}.drawer-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.drawer-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ffffff14}mat-drawer-content[_ngcontent-%COMP%]{padding:12px;display:flex;flex-direction:column;align-items:flex-start}.right-menu[_ngcontent-%COMP%]{display:flex;flex-direction:row;list-style:none}.right-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 20px;margin:0}.right-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .right-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.right-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-weight:lighter;font-size:20px}.right-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.right-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .right-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:drop-shadow(0 4px 4px black)}mat-drawer-content[_ngcontent-%COMP%]{align-items:center}.card[_ngcontent-%COMP%]{width:90%;height:85%}@media only screen and (max-width:768px){.right-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:17px}.menu[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:20%}}@media only screen and (max-width:665px){.right-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:15px}.menu[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:25%}}@media only screen and (max-width:575px){.right-menu[_ngcontent-%COMP%]{display:none}.menu[_ngcontent-%COMP%]   .menu-mobile[_ngcontent-%COMP%]{display:block}.menu[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:35%}}@media only screen and (max-width:425px){.menu[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:50%}}"]}),t})();const W=[{answer:"",content:"",category:{id:"1",name:"Princesas",image:"https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim."},id:"1"}];let X=(()=>{class t{constructor(t){this.http=t}getAllQuestions(){return this.http.get(`${g.N.API_QUESTIONS}`).toPromise()}getQuestion(t){return this.http.get(`${g.N.API_QUESTIONS}/${t}`).toPromise()}getQuestionByCategory(t){return new Promise((e,n)=>{e(W.filter(e=>{var n;return(null===(n=e.category)||void 0===n?void 0:n.id)==t}))})}saveQuestion(t){return this.http.post(`${g.N.API_QUESTIONS}`,JSON.stringify(t)).toPromise()}updateQuestion(t,e){return this.http.put(`${g.N.API_QUESTIONS}`,JSON.stringify(e)).toPromise()}deleteQuestion(t){return this.http.delete(`${g.N.API_QUESTIONS}/${t}`).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(d.eN))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function V(t,e){if(1&t&&(u.TgZ(0,"mat-option",11),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.Q6J("value",t.id),u.xp6(1),u.hij(" ",t.name," ")}}function K(t,e){1&t&&(u.TgZ(0,"button",12),u._uU(1,"Cancel"),u.qZA())}function tt(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"button",13),u.NdJ("click",function(){return u.CHM(t),u.oxw().update()}),u._uU(1,"Update"),u.qZA()}}function et(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"button",14),u.NdJ("click",function(){return u.CHM(t),u.oxw().save()}),u._uU(1,"Create"),u.qZA()}if(2&t){const t=u.oxw();u.Q6J("disabled",t.qForm.invalid)}}let nt=(()=>{class t{constructor(t,e,n,i,o){this.data=t,this.formBuilder=e,this.qService=n,this.catService=i,this.matDialogRef=o,this.title="New Question",this.status=c.CREATING,this.categoriesList=[],this.qForm=this.formBuilder.group({id:[],content:["",s.kI.required],answer:["",s.kI.required],questionCategoryId:["",s.kI.required]})}ngOnInit(){var t;null!=this.data?(this.status=this.data.status,this.qForm.patchValue(Object.assign(Object.assign({},this.data.question),{questionCategoryId:null===(t=this.data.question.category)||void 0===t?void 0:t.id}))):this.status=c.CREATING,3!=this.status?this.catService.getAllCategories().then(t=>{this.categoriesList=t}).catch(t=>console.log(t)):this.categoriesList=this.data.question.category?[this.data.question.category]:[],this.updateTitle()}updateTitle(){switch(this.status){case c.CREATING:this.title="New Question";break;case c.UPDATING:this.title="Update Question";break;case c.READONLY:this.title="Question"}}save(){this.qForm.valid&&this.qService.saveQuestion(this.qForm.value).then(t=>{this.matDialogRef.close(!0)}).catch(t=>{console.log(t),this.matDialogRef.close(!1)})}update(){this.qForm.valid&&this.qService.updateQuestion(this.qForm.value.id,this.qForm.value).then(t=>this.matDialogRef.close(!0),t=>{this.matDialogRef.close(!1)}).catch(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(l.WI),u.Y36(s.qu),u.Y36(X),u.Y36(m),u.Y36(l.so))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-single-question"]],decls:28,vars:8,consts:[["mat-dialog-title",""],[3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","type","text","placeholder","Question","required","","formControlName","content",3,"readonly"],["rows","4","matInput","","placeholder","Answer","formControlName","answer",3,"readonly"],["required","","formControlName","questionCategoryId","name","questionCategoryId"],[3,"value",4,"ngFor","ngForOf"],[1,"modal-buttons"],["mat-button","","color","accent","mat-dialog-close","",4,"ngIf"],["mat-raised-button","","color","primary","type","submit",3,"click",4,"ngIf"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-button","","color","accent","mat-dialog-close",""],["mat-raised-button","","color","primary","type","submit",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"]],template:function(t,e){1&t&&(u.TgZ(0,"h1",0),u.TgZ(1,"mat-icon"),u._uU(2,"help_outline"),u.qZA(),u._uU(3),u.qZA(),u.TgZ(4,"mat-dialog-content"),u.TgZ(5,"form",1),u.TgZ(6,"mat-form-field",2),u.TgZ(7,"mat-label"),u._uU(8,"Question "),u.qZA(),u._UZ(9,"input",3),u.TgZ(10,"mat-error"),u._uU(11,"Question is required"),u.qZA(),u.qZA(),u.TgZ(12,"mat-form-field",2),u.TgZ(13,"mat-label"),u._uU(14,"Answer "),u.qZA(),u.TgZ(15,"textarea",4),u._uU(16," "),u.qZA(),u.qZA(),u.TgZ(17,"mat-form-field",2),u.TgZ(18,"mat-label"),u._uU(19,"Category"),u.qZA(),u.TgZ(20,"mat-select",5),u.YNc(21,V,2,2,"mat-option",6),u.qZA(),u.TgZ(22,"mat-error"),u._uU(23,"Category is required"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(24,"mat-dialog-actions",7),u.YNc(25,K,2,0,"button",8),u.YNc(26,tt,2,0,"button",9),u.YNc(27,et,2,1,"button",10),u.qZA()),2&t&&(u.xp6(3),u.hij(" ",e.title,""),u.xp6(2),u.Q6J("formGroup",e.qForm),u.xp6(4),u.Q6J("readonly",3==e.status),u.xp6(6),u.Q6J("readonly",3==e.status),u.xp6(6),u.Q6J("ngForOf",e.categoriesList),u.xp6(4),u.Q6J("ngIf",3!=e.status),u.xp6(1),u.Q6J("ngIf",2==e.status),u.xp6(1),u.Q6J("ngIf",1==e.status))},directives:[l.uh,p.Hw,l.xY,s._Y,s.JL,s.sg,h.KE,h.hX,f.Nt,s.Fj,s.Q7,s.JJ,s.u,h.TO,Z.gD,i.sg,l.H8,i.O5,C.ey,y.lW,l.ZT],styles:[""]}),t})();function it(t,e){1&t&&(u.TgZ(0,"div",14),u._UZ(1,"mat-progress-spinner",15),u.qZA())}function ot(t,e){1&t&&(u.TgZ(0,"th",16),u._uU(1," Question "),u.qZA())}function at(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"td",17),u.TgZ(1,"a",18),u.NdJ("click",function(){const e=u.CHM(t).$implicit;return u.oxw().seeQuestion(e)}),u._uU(2),u.qZA(),u.qZA()}if(2&t){const t=e.$implicit;u.xp6(2),u.Oqu(t.content)}}function rt(t,e){1&t&&(u.TgZ(0,"th",16),u._uU(1," Category "),u.qZA())}function ct(t,e){if(1&t&&(u.TgZ(0,"td",17),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.hij(" ",(null==t.category?null:t.category.name)||""," ")}}function st(t,e){1&t&&(u.TgZ(0,"th",16),u._uU(1," Options "),u.qZA())}function lt(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"td",19),u.TgZ(1,"div",20),u.TgZ(2,"button",21),u.NdJ("click",function(){const e=u.CHM(t).$implicit;return u.oxw().updateQuestion(e)}),u.TgZ(3,"mat-icon"),u._uU(4,"mode_edit"),u.qZA(),u.qZA(),u.TgZ(5,"button",22),u.NdJ("click",function(){const e=u.CHM(t).$implicit;return u.oxw().deleteQuestion(e.id)}),u.TgZ(6,"mat-icon"),u._uU(7,"delete"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}}function ut(t,e){1&t&&u._UZ(0,"tr",23)}function gt(t,e){1&t&&u._UZ(0,"tr",24)}const dt=function(){return[5,10,25,100]};let mt=(()=>{class t{constructor(t,e,n){this.qService=t,this.matDialog=e,this.snackBar=n,this.displayedColumns=["content","category","options"],this.datasource=new r.by,this.loading=!1}ngOnInit(){this.loadDatasource()}loadDatasource(){this.loading=!0,this.qService.getAllQuestions().then(t=>{this.datasource=new r.by(t),this.paginator&&(this.datasource.paginator=this.paginator),this.loading=!1}).catch(t=>console.log(t))}newQuestion(){this.matDialog.open(nt,{width:"60%"}).afterClosed().subscribe(t=>{t&&(this.snackBar.open("Question created!","Ok",{duration:2e3}),this.loadDatasource())},t=>this.snackBar.open("Cannot create question","Ok",{duration:2e3}))}seeQuestion(t){this.matDialog.open(nt,{width:"60%",data:{status:c.READONLY,question:t}})}updateQuestion(t){this.matDialog.open(nt,{width:"60%",data:{status:c.UPDATING,question:t}}).afterClosed().subscribe(t=>{t&&(this.snackBar.open("Question updated!","Ok",{duration:2e3}),this.loadDatasource())},t=>this.snackBar.open("Cannot update question","Ok",{duration:2e3}))}deleteQuestion(t){this.qService.deleteQuestion(t).then(t=>{t&&(this.snackBar.open("Question deleted!","Ok",{duration:2e3}),this.loadDatasource())}).catch(t=>this.snackBar.open("Cannot delete question","Ok",{duration:2e3}))}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(X),u.Y36(l.uw),u.Y36(x.ux))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-list-questions"]],viewQuery:function(t,e){if(1&t&&u.Gf(a.NW,5),2&t){let t;u.iGM(t=u.CRH())&&(e.paginator=t.first)}},decls:19,vars:6,consts:[[1,"options"],["mat-fab","","color","primary","aria-label","","matTooltip","New Question",3,"click"],[1,"table-responsive"],["style","display: flex; justify-content: center; align-items: center;",4,"ngIf"],["mat-table","",3,"dataSource"],["matColumnDef","content"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","category"],["matColumnDef","options"],["mat-cell","","style","width: 15%;",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],[2,"display","flex","justify-content","center","align-items","center"],["color","primary","mode","indeterminate"],["mat-header-cell",""],["mat-cell",""],[1,"link",3,"click"],["mat-cell","",2,"width","15%"],[1,"row-buttons"],["mat-icon-button","","color","accent","aria-label","Update Question","matTooltip","Update Question",3,"click"],["mat-icon-button","","color","accent","aria-label","Delete Question","matTooltip","Delete Question",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(u.TgZ(0,"div",0),u.TgZ(1,"button",1),u.NdJ("click",function(){return e.newQuestion()}),u.TgZ(2,"mat-icon"),u._uU(3,"add"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(4,"div",2),u.YNc(5,it,2,0,"div",3),u.TgZ(6,"table",4),u.ynx(7,5),u.YNc(8,ot,2,0,"th",6),u.YNc(9,at,3,1,"td",7),u.BQk(),u.ynx(10,8),u.YNc(11,rt,2,0,"th",6),u.YNc(12,ct,2,1,"td",7),u.BQk(),u.ynx(13,9),u.YNc(14,st,2,0,"th",6),u.YNc(15,lt,8,0,"td",10),u.BQk(),u.YNc(16,ut,1,0,"tr",11),u.YNc(17,gt,1,0,"tr",12),u.qZA(),u._UZ(18,"mat-paginator",13),u.qZA()),2&t&&(u.xp6(5),u.Q6J("ngIf",e.loading),u.xp6(1),u.Q6J("dataSource",e.datasource),u.xp6(10),u.Q6J("matHeaderRowDef",e.displayedColumns),u.xp6(1),u.Q6J("matRowDefColumns",e.displayedColumns),u.xp6(1),u.Q6J("pageSizeOptions",u.DdM(5,dt)))},directives:[y.lW,v.gM,p.Hw,i.O5,r.BZ,r.w1,r.fO,r.Dz,r.as,r.nj,a.NW,k.Ou,r.ge,r.ev,r.XQ,r.Gk],styles:[".options[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;padding-bottom:1em}.table-responsive[_ngcontent-%COMP%]{width:100%;overflow-y:auto;height:85%}.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}tbody[_ngcontent-%COMP%]{height:100%}.row-buttons[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.image-element[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px;width:50px;height:50px}"]}),t})();var pt=n(6484);const ht=[{path:"",component:z,canActivate:[(()=>{class t{constructor(t,e){this.localService=t,this.router=e}canActivate(t,e){return!!this.localService.isAuth()||(this.router.navigate(["/login"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(pt.n),u.LFG(o.F0))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()],children:[{path:"",component:mt},{path:"categories",component:B},{path:"questions",component:mt}]}];let ft=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[o.Bz.forChild(ht)],o.Bz]}),t})();var Zt=n(3355),Ct=n(8494);let yt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[i.ez,ft,Zt.E,Ct.xu,s.UX]]}),t})()}}]);