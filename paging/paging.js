var kkpager={pagerid:"kkpager",mode:"link",pno:1,total:1,totalRecords:0,isShowFirstPageBtn:!0,isShowLastPageBtn:!0,isShowPrePageBtn:!0,isShowNextPageBtn:!0,isShowTotalPage:!0,isShowCurrPage:!0,isShowTotalRecords:!1,isGoPage:!0,isWrapedPageBtns:!0,isWrapedInfoTextAndGoPageBtn:!0,hrefFormer:"",hrefLatter:"",gopageWrapId:"kkpager_gopage_wrap",gopageButtonId:"kkpager_btn_go",gopageTextboxId:"kkpager_btn_go_input",lang:{firstPageText:"首页",firstPageTipText:"首页",lastPageText:"尾页",lastPageTipText:"尾页",prePageText:"上一页",prePageTipText:"上一页",nextPageText:"下一页",nextPageTipText:"下一页",totalPageBeforeText:"共",totalPageAfterText:"页",currPageBeforeText:"第",currPageAfterText:"页",totalInfoSplitStr:"/",totalRecordsBeforeText:"共",totalRecordsAfterText:"条数据",gopageBeforeText:"&nbsp;转到",gopageButtonOkText:"确定",gopageAfterText:"页",buttonTipBeforeText:"第",buttonTipAfterText:"页"},getLink:function(t){return 1==t?this.hrefFormer+this.hrefLatter:this.hrefFormer+"_"+t+this.hrefLatter},click:function(t){return!1},getHref:function(t){return"#"},focus_gopage:function(){var t=$("#"+this.gopageButtonId);$("#"+this.gopageTextboxId).attr("hideFocus",!0),t.show(),t.css("left","10px"),$("#"+this.gopageTextboxId).addClass("focus"),t.animate({left:"+=30"},50)},blur_gopage:function(){var e=this;setTimeout(function(){var t=$("#"+e.gopageButtonId);t.animate({left:"-=25"},100,function(){t.hide(),$("#"+e.gopageTextboxId).removeClass("focus")})},400)},keypress_gopage:function(){var t=arguments[0]||window.event,e=t.keyCode||t.charCode;return 8==e||(13==e?(kkpager.gopage(),!1):!(!t.ctrlKey||99!=e&&118!=e)||!(e<48||57<e))},gopage:function(){var t=$("#"+this.gopageTextboxId).val();if(isNaN(t))$("#"+this.gopageTextboxId).val(this.next);else{var e=parseInt(t);e<1&&(e=1),e>this.total&&(e=this.total),"click"==this.mode?this._clickHandler(e):window.location=this.getLink(e)}},selectPage:function(t){this._config.pno=t,this.generPageHtml(this._config,!0)},generPageHtml:function(t,e){!e&&this.inited||(delete this._config,this.init(t));var a="",s="",i="",o="";this.isShowFirstPageBtn&&(a=this.hasPrv?"<a "+this._getHandlerStr(1)+' title="'+(this.lang.firstPageTipText||this.lang.firstPageText)+'">'+this.lang.firstPageText+"</a>":'<span class="disabled">'+this.lang.firstPageText+"</span>"),this.isShowPrePageBtn&&(s=this.hasPrv?"<a "+this._getHandlerStr(this.prv)+' title="'+(this.lang.prePageTipText||this.lang.prePageText)+'">'+this.lang.prePageText+"</a>":'<span class="disabled">'+this.lang.prePageText+"</span>"),this.isShowNextPageBtn&&(i=this.hasNext?"<a "+this._getHandlerStr(this.next)+' title="'+(this.lang.nextPageTipText||this.lang.nextPageText)+'">'+this.lang.nextPageText+"</a>":'<span class="disabled">'+this.lang.nextPageText+"</span>"),this.isShowLastPageBtn&&(o=this.hasNext?"<a "+this._getHandlerStr(this.total)+' title="'+(this.lang.lastPageTipText||this.lang.lastPageText)+'">'+this.lang.lastPageText+"</a>":'<span class="disabled">'+this.lang.lastPageText+"</span>");var n="",g='<span class="spanDot">...</span>',r='<span class="totalText">',h='<span class="totalInfoSplitStr">'+this.lang.totalInfoSplitStr+"</span>";this.isShowCurrPage?(r+=this.lang.currPageBeforeText+'<span class="currPageNum">'+this.pno+"</span>"+this.lang.currPageAfterText,this.isShowTotalPage?(r+=h,r+=this.lang.totalPageBeforeText+'<span class="totalPageNum">'+this.total+"</span>"+this.lang.totalPageAfterText):this.isShowTotalRecords&&(r+=h,r+=this.lang.totalRecordsBeforeText+'<span class="totalRecordNum">'+this.totalRecords+"</span>"+this.lang.totalRecordsAfterText)):this.isShowTotalPage?(r+=this.lang.totalPageBeforeText+'<span class="totalPageNum">'+this.total+"</span>"+this.lang.totalPageAfterText,this.isShowTotalRecords&&(r+=h,r+=this.lang.totalRecordsBeforeText+'<span class="totalRecordNum">'+this.totalRecords+"</span>"+this.lang.totalRecordsAfterText)):this.isShowTotalRecords&&(r+=this.lang.totalRecordsBeforeText+'<span class="totalRecordNum">'+this.totalRecords+"</span>"+this.lang.totalRecordsAfterText),r+="</span>";var l="";if(this.isGoPage&&(l='<span class="goPageBox">'+this.lang.gopageBeforeText+'<span id="'+this.gopageWrapId+'"><input type="button" id="'+this.gopageButtonId+'" onclick="kkpager.gopage()" value="'+this.lang.gopageButtonOkText+'" /><input type="text" autocomplete="off" id="'+this.gopageTextboxId+'" onfocus="kkpager.focus_gopage()"  onkeypress="return kkpager.keypress_gopage(event);"   onblur="kkpager.blur_gopage()" value="'+this.next+'" /></span>'+this.lang.gopageAfterText+"</span>"),this.total<=8)for(var p=1;p<=this.total;p++)this.pno==p?n+='<span class="curr">'+p+"</span>":n+="<a "+this._getHandlerStr(p)+' title="'+this.lang.buttonTipBeforeText+p+this.lang.buttonTipAfterText+'">'+p+"</a>";else if(this.pno<=5){for(p=1;p<=7;p++)this.pno==p?n+='<span class="curr">'+p+"</span>":n+="<a "+this._getHandlerStr(p)+' title="'+this.lang.buttonTipBeforeText+p+this.lang.buttonTipAfterText+'">'+p+"</a>";n+=g}else{n+="<a "+this._getHandlerStr(1)+' title="'+this.lang.buttonTipBeforeText+"1"+this.lang.buttonTipAfterText+'">1</a>',n+="<a "+this._getHandlerStr(2)+' title="'+this.lang.buttonTipBeforeText+"2"+this.lang.buttonTipAfterText+'">2</a>',n+=g;var c=this.pno-2,d=this.pno+2;d>this.total?(c=(d=this.total)-4,this.pno-c<2&&--c):d+1==this.total&&(d=this.total);for(p=c;p<=d;p++)this.pno==p?n+='<span class="curr">'+p+"</span>":n+="<a "+this._getHandlerStr(p)+' title="'+this.lang.buttonTipBeforeText+p+this.lang.buttonTipAfterText+'">'+p+"</a>";d!=this.total&&(n+=g)}var f="<div>";this.isWrapedPageBtns?f+='<span class="pageBtnWrap">'+a+s+n+i+o+"</span>":f+=a+s+n+i+o,this.isWrapedInfoTextAndGoPageBtn?f+='<span class="infoTextAndGoPageBtnWrap">'+r+l+"</span>":f+=r+l,f+='</div><div style="clear:both;"></div>',$("#"+this.pagerid).html(f)},init:function(t){if(this.pno=isNaN(t.pno)?1:parseInt(t.pno),this.total=isNaN(t.total)?1:parseInt(t.total),this.totalRecords=isNaN(t.totalRecords)?0:parseInt(t.totalRecords),t.pagerid&&(this.pagerid=t.pagerid),t.mode&&(this.mode=t.mode),t.gopageWrapId&&(this.gopageWrapId=t.gopageWrapId),t.gopageButtonId&&(this.gopageButtonId=t.gopageButtonId),t.gopageTextboxId&&(this.gopageTextboxId=t.gopageTextboxId),null!=t.isShowFirstPageBtn&&(this.isShowFirstPageBtn=t.isShowFirstPageBtn),null!=t.isShowLastPageBtn&&(this.isShowLastPageBtn=t.isShowLastPageBtn),null!=t.isShowPrePageBtn&&(this.isShowPrePageBtn=t.isShowPrePageBtn),null!=t.isShowNextPageBtn&&(this.isShowNextPageBtn=t.isShowNextPageBtn),null!=t.isShowTotalPage&&(this.isShowTotalPage=t.isShowTotalPage),null!=t.isShowCurrPage&&(this.isShowCurrPage=t.isShowCurrPage),null!=t.isShowTotalRecords&&(this.isShowTotalRecords=t.isShowTotalRecords),t.isWrapedPageBtns&&(this.isWrapedPageBtns=t.isWrapedPageBtns),t.isWrapedInfoTextAndGoPageBtn&&(this.isWrapedInfoTextAndGoPageBtn=t.isWrapedInfoTextAndGoPageBtn),null!=t.isGoPage&&(this.isGoPage=t.isGoPage),t.lang)for(var e in t.lang)this.lang[e]=t.lang[e];this.hrefFormer=t.hrefFormer||"",this.hrefLatter=t.hrefLatter||"",t.getLink&&"function"==typeof t.getLink&&(this.getLink=t.getLink),t.click&&"function"==typeof t.click&&(this.click=t.click),t.getHref&&"function"==typeof t.getHref&&(this.getHref=t.getHref),this._config||(this._config=t),this.pno<1&&(this.pno=1),this.total=this.total<=1?1:this.total,this.pno>this.total&&(this.pno=this.total),this.prv=this.pno<=2?1:this.pno-1,this.next=this.pno>=this.total-1?this.total:this.pno+1,this.hasPrv=1<this.pno,this.hasNext=this.pno<this.total,this.inited=!0},_getHandlerStr:function(t){return"click"==this.mode?'href="'+this.getHref(t)+'" onclick="return kkpager._clickHandler('+t+')"':'href="'+this.getLink(t)+'"'},_clickHandler:function(t){var e=!1;return this.click&&"function"==typeof this.click&&(e=this.click.call(this,t)||!1),e}};