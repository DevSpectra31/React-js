    function customRender(Reactelement, container) {
        const domElement = document.createElement(Reactelement.type)
        domElement.innerHTML = Reactelement.props.children

        for (const prop in Reactelement.props) {
            if (prop === 'children') continue
            domElement.setAttribute(prop, Reactelement.props[prop])
        }

        container.appendChild(domElement)
    }

    const Reactelement = {
        type: 'a',
        props: {
            href: "http://www.google.com",
            target: "_blank",
            children: 'Click me to visit Google'
        },
    }
    const mainContainer = document.getElementById('root')
    customRender(Reactelement, mainContainer)
