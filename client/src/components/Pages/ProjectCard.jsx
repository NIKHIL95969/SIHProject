import { Link } from 'react-router-dom'

function ProjectCard({project}) {
  return (
    <>
      <div  key={project.id}className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={`http://127.0.0.1:8000/${project.image}`} alt="" />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <Link to={"#"} className="hover:underline">
                {/* {post.category.name} */}
              </Link>
            </p>
            <Link to={"#"} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{project.name}</p>
              <p className="mt-3 text-base text-gray-500">{project.description}</p>
            </Link>
            </div>
            <div className="flex flex-row">
            {/* {post.tags.map(taging)} */}
            </div>
          
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
                {/* auther profile link */}
              <Link to={"#"}>  
                <span className="sr-only">Auther Name</span>
                <img className="h-10 w-10 rounded-full" src={"#"} alt="" />
              </Link>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <Link to={"#"} className="hover:underline">
                  {/* {post.author.name} */}
                </Link>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="10:00pm">{project.created_at}</time>
                <span aria-hidden="true">&middot;</span>
                <span>6 read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>

  )
}

export default ProjectCard