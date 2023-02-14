console.log('You are awesome');

function onClickMe(){
    const parentDiv=document.getElementById('main')
    const children=parentDiv.children
    const p=document.createElement('p')
    p.innerHTML='I am an Assistant System Engineer in TCS working on maintaining and developing the dashboard for an automation project. I have experience in Nodejs, Reactjs looking for an opportunity which challenges my skills, where I get to innovate efficient and effective solutions for highly scalable mission-critical web applications.'
    p.className="pl-4 pr-4 pt-4 w-full"
    children[0].replaceWith(p)
}

function onClickExperience(){
    const expList=
    ['Maintaining newly developed and existing system for a mission-critical data-intensive internal web app utilizing Javascript, Nodejs, Reactjs, Graphql, Elasticsearch',
    'Developed and debugged services, APIs in the existing system to stabilize the web app, resolve inconsistency issues and functionality issues, optimize performance, prevent escalations in the web app. Testing on postman.',
    'Developed and deployed new features and innovated new solutions in the web app.',
    'Writing intermediate SQL queries and optimized existing SQL queries in MSSQL database.',
    'Writing NoSQL Elasticsearch queries to fetch data from ES server and utilized Javascript, Nodejs, Reactjs to render the data on Frontend. Created various indices to realize new features.',
    'Communicating and coordinating with clients to discuss the issues in web app, get feedback and gather inputs and requirements to improve the web app. Documenting the project.',
    'Deploying the project on Red Hat Enterprise Linux servers through terminal, maintaining the project on Git',
    'Updated certificates in web servers on NGINX and Elasticsearch servers through terminal.' ]
    
    const list=document.createElement('ul')
    expList.forEach(point=>{
        //console.log(point)
        let li=document.createElement("li")
        li.innerText=point
        list.appendChild(li)    
    })
    list.className="pl-4 pr-4 pt-4 w-full"
    const parentDiv=document.getElementById("main")
    const children=parentDiv.children
    // const h1=document.createElement("h1")
    // h1.innerHTML="Experience"
    children[0].replaceWith(list)

}

function onClickProjects(){
    const projectDetails=[
    'Features: Signin, SignUp, Order Items, Checkout, Cart Functionality, Admin Panel etc',
    'Implemented in ES6 Javascript, Nodejs, Reactjs, Redux, MongoDB, HTML, CSS etc',
    'Implemented Models, Controller, Routes, Middleware in Nodejs',
    'Implemented various models in MongoDB to store user data, ticket data, notes data in MongoDB.',
    'GitHub Link: github.com/shivamk001/enterprises_support_desk.',
    'Development in progress '
    ]

    const list=document.createElement('ul')
    projectDetails.forEach(detail=>{
        //console.log(detail)
        let li=document.createElement("li")
        li.innerText=detail
        list.appendChild(li)    
    })
    list.className="pl-4 pr-4 pt-4 w-full"
    const parentDiv=document.getElementById("main")
    const children=parentDiv.children
    // const h1=document.createElement("h1")
    // h1.innerHTML="Experience"
    children[0].replaceWith(list)
    
}

function onClickSkills(){
    const skills=['Nodejs','Reactjs','SQL','Javascript','Git','Elasticstack']
    const list=document.createElement('ul')

    skills.forEach(skill=>{
        const li=document.createElement('li')
        li.innerHTML=skill
        list.appendChild(li)
    })
    list.className="pl-4 pr-4 pt-4 w-full"
    const parentDiv=document.getElementById('main')
    const children=parentDiv.children
    children[0].replaceWith(list)
}

function onClickCertifications(){
    const certifications=['UDEMY: NODEJS, EXPRESSJS, MONGODB BOOTCAMP']
    const list=document.createElement('ul')

    certifications.forEach(certification=>{
        const li=document.createElement('li')
        li.innerHTML=certification
        list.appendChild(li)
    })

    list.className="pl-4 pr-4 pt-4 w-full"

    const parentDiv=document.getElementById('main')
    const children=parentDiv.children
    children[0].replaceWith(list)
}

function onClickEducation(){
    const parentDiv=document.getElementById('main')
    const children=parentDiv.children
    const p=document.createElement('p')
    p.className="pl-4 pr-4 pt-4 w-full"
    p.innerHTML=`BTECH CSE, IERT ALLAHABAD, AFFILIATED TO AKTU, LUCKNOW `
    children[0].replaceWith(p)
}