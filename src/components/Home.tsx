import { locations } from '#constants'
import useLocationStore from '#store/location'
import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx'
import { Draggable } from 'gsap/Draggable'


const projects = locations.work?.children ?? []
type Project = (typeof projects)[number]

const Home = () => {

    const {setActiveLocation} = useLocationStore()

    const {openWindow} = useWindowStore()

    const handleOpenProjectFinder = (project: Project) =>{
        setActiveLocation({
            ...project,
            type: locations.work.type
        })
        openWindow("finder")
    }

    useGSAP(() =>{
        const folderEls = gsap.utils.toArray<HTMLElement>('.folder')
        folderEls.forEach((el) => {
            const projectId = Number.parseInt(el.dataset.projectId ?? '0')
            const project = projects.find(p => p.id === projectId)
            if (!project) return
            Draggable.create(el, {
                onClick: () => handleOpenProjectFinder(project)
            })
        })
    },[])

  return (
    <section id="home">
        <ul>
            {projects.map((project) => (
                <li
                key={project.id}
                data-project-id={project.id}
                className={clsx("group folder", project.windowPosition)}
                >
                    <img src='/images/folder.png' alt={project.name}/>
                    <p>{project.name}</p>

                </li>
            ))}
        </ul>

    </section>
  )
}

export default Home