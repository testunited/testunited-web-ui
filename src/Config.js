var api_host_dev = "web-api.int.testunited.minikube.local";


function getApiHost(){
    var protocol = window.location.protocol;
    if(window.location.hostname === "localhost")
        return protocol + '//' + api_host_dev;
    else
        return protocol + '//' + window.location.hostname.replace("web-ui","web-api");
}

export default getApiHost;