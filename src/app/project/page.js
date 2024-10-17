import Navbar from "@/components/navbar";
import Image from "next/image";

export default function ProjectPage() {
    const skills = [
        {
            name: 'HTML',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png    '
        },
        {
            name: 'CSS',
            image: 'https://w7.pngwing.com/pngs/4/808/png-transparent-css3-css3-logo-logo-language-programming-language-css-3d-icon-thumbnail.png'
        },
        {
            name: 'JavaScript',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
        },
        {
            name: 'NodeJs',
            image: 'https://e7.pngegg.com/pngimages/558/166/png-clipart-node-js-javascript-react-express-js-linux-foundation-mongodb-icons-angle-text-thumbnail.png'
        },
        {
            name: 'ReactJs',
            image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
        },
        {
            name: 'ViteJs',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png'
        },
        {
            name: 'VueJs',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
        },
        {
            name: 'Python',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'
        },
        {
            name: 'Django',
            image: 'https://www.svgrepo.com/show/353657/django-icon.svg'
        },
        {
            name: 'Flask',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s'
        },
        {
            name: 'Docker',
            image: 'https://static-00.iconduck.com/assets.00/docker-icon-1024x739-rivf80b4.png'
        },
        {
            name: 'Kubernetes',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg'
        },
        {
            name: 'Nginx',
            image: 'https://logowik.com/content/uploads/images/nginx7281.logowik.com.webp'
        },
        {
            name: 'AWS',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png'
        },
        {
            name: 'MySQL',
            image: 'https://w7.pngwing.com/pngs/717/111/png-transparent-mysql-round-logo-tech-companies-thumbnail.png'
        },
        {
            name: 'PostgreSql',
            image: 'https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png'
        },
        {
            name: 'SQLite',
            image: 'https://w7.pngwing.com/pngs/1010/539/png-transparent-sqlite-logo-thumbnail-tech-companies.png'
        },
        {
            name: 'MongoDB',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BVeiXAMU-SsGkVehbpBV1pOlUClyxhC2bg&s'
        },
        {
            name: 'Postman',
            image: 'https://www.cdnlogo.com/logos/p/20/postman.svg'
        },
        {
            name: 'Git',
            image: 'https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png'
        },
        {
            name: 'Jenkins',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png'
        },
        {
            name: 'Linux',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1727px-Tux.svg.png'
        },
        {
            name: 'Figma',
            image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png'
        },
    ]
    return (
        <>
            <Navbar />
            <div className="w-3/4 m-auto space-y-4">
                <h1 className="text-2xl font-bold italic underline">Skills</h1>
                <div className="grid grid-cols-6 gap-4">
                {
                    skills.map((skill, index) => (
                        <div key={index} className="bg-slate-300 w-fit p-6 rounded-lg text-center flex justify-between flex-col h-[200px]">
                            <Image src={skill.image} alt={skill.name} width={100} height={100}className="rounded-md"/>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))
                }
            </div>
            </div>
        </>
    )
}