var URL = 'https://homeapi.mylyapp.com/SchoolA2Z.svc/'; var URLSchoolA2ZApi = "https://admin.mylyapp.com/mylyappRestWebAPI/api/Values2/"; var URLSchoolA2ZApiAdvt = "https://homeapi.mylyapp.com/SchoolA2ZCentralize.svc/"; var URLSchoolA2ZApiSclContest = "https://homeapi.mylyapp.com/SchoolA2ZCentralize.svc/"; var MethodName = { GetNewsletter: "GetNewsletterList", SaveNewsletter: "SaveNewsletter", SaveContact: "SaveContact", SavePartner: "SavePartner", SaveBlogNewsletter: "SaveBlogNewsletter", TrackAdvertisement: "TrackAdvertisement", SaveFreeSignUp: "SaveFreeSignUp" }
var MethodNameSchoolA2Z = { GetCountStatusForSchoolA2ZSite: "GetCountStatusForSchoolA2ZSite", GetAdvtForMylyWebsite: "GetAdvertisement", SaveSchoolContest: "SaveSchoolContest", SaveMylyFeedback: "SaveMylyFeedback", SaveFMSBrochure: "SaveFMSBrochure", SaveReferral: "SaveReferral", SaveMobileAppBrochure: "SaveMobileAppBrochure", SaveBrochure: "SaveBrochure" }
var ResultCode = { Success: 0, AlreadyExist: 1, Error: 2, EmailSendFailed: 3, NotExist: 4, AlreadyExistEmail: 5, AlreadyExistContact: 6 }
function ServerRequest(methodName, dataValue, OnSuccess, OnError) { try { $.ajax({ contentType: "application/json", crossDomain: true, type: "POST", url: URL + methodName, dataType: 'json', async: true, data: dataValue, beforeSend: function () { cube_showloading(); }, success: function (result) { if (result != null) { if (OnSuccess != null) { OnSuccess(result); } } }, onerror: function (e) { if (OnError != null) { OnError(e); } }, complete: function () { cube_hideloading(); }, }); } catch (err) { alert('Error in calling myly service: ' + err.message); } } function ServerRequestSchoolA2Z(methodName, dataValue, OnSuccess, OnError) { try { $.ajax({ contentType: "application/json", crossDomain: true, type: "GET", url: URLSchoolA2ZApi + methodName, dataType: 'json', async: true, data: dataValue, beforeSend: function () { }, success: function (result) { if (result != null) { if (OnSuccess != null) { OnSuccess(result); } } }, onerror: function (e) { if (OnError != null) { OnError(e); } }, complete: function () { }, }); } catch (err) { alert('Error in calling myly service: ' + err.message); } } function ServerRequestSchoolA2ZAdvt(methodName, dataValue, OnSuccess, OnError) { try { $.ajax({ contentType: "application/json", crossDomain: true, type: "GET", url: URLSchoolA2ZApiAdvt + methodName + "/" + dataValue, dataType: 'json', async: true, data: null, beforeSend: function () { }, success: function (result) { if (result != null) { if (OnSuccess != null) { OnSuccess(result.SingleResult); } } }, onerror: function (e) { if (OnError != null) { OnError(e); } }, complete: function () { }, }); } catch (err) { alert('Error in calling myly service: ' + err.message); } } function ServerRequestSchoolA2ZSclContest(methodName, dataValue, OnSuccess, OnError) { try { $.ajax({ contentType: "application/json", crossDomain: true, type: "POST", url: URLSchoolA2ZApiSclContest + methodName, dataType: 'json', async: true, data: dataValue, beforeSend: function () { cube_showloading(); }, success: function (result) { if (result != null) { if (OnSuccess != null) { OnSuccess(result); } } }, onerror: function (e) { if (OnError != null) { OnError(e); } }, complete: function () { cube_hideloading(); }, }); } catch (err) { alert('Error in calling myly service: ' + err.message); } } function TrackAdvt(advtID, eventName) { try { ServerRequestSchoolA2ZAdvt(MethodName.TrackAdvertisement, advtID + '/' + eventName + '/0' + '/0' + '/' + eventName, null, null); } catch (err) { ServerRequestSchoolA2ZAdvt(MethodName.TrackAdvertisement, advtID + '/' + "error" + '/0' + '/0' + '/' + error, null, null); } }