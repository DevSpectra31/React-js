function customRender(ReactElement,container){
//     const domElement=document.createElement
//     (ReactElement.type)
//     domElement.innerHTML=ReactElement.children
//     domElement.setAttribute('href',ReactElement.props.href)
//     domElement.setAttribute('target',ReactElement.props.target)
//     container.appendChild(domElement)
// 
//if their are multiple attributes then , above code is not optimal

const domElement=document.createElement(ReactElement.type)
domElement.innerHTML=ReactElement.children
for(const prop in props){
    if(prop === children) continue;
    domElement.setAttribute(prop,ReactElement.props[prop])
}
container.appendChild(domElement)
}
const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:"_blank",
    },
    children:'click me to visit google'
}

const maincontainer=document.querySelector('#root')
customRender(ReactElement,maincontainer)