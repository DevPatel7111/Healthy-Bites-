import React from 'react';

const About = () => {
  let message = "There are Many variation of apassagers of loreum \n kdndnsvodsnodnc";

  return (
    <div className='text-white bg-richblack-900'>
      <section>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold shadow-md">The Algorithm Architect</h2>
            <p>{message}</p>
          </div>

          <div className="flex gap-4">
            <div className="bg-gray-800 p-4 flex-1 card hover:shadow-lg hover:scale-105 hover:bg-white transition duration-300">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7xYEue3PtvX1RcgcjxYfe9nFIyM7aE-PYQ' alt="Dev Patel" />
              <h3 className="text-center">Dev Patel</h3>
              <p className="text-white">Developer</p>
              <p className="text-white">Aliquam erat volutpat. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis</p>
              <ul>
                <li><a href='https://github.com/DevPatel7111' className="text-white"> Github </a></li>
                <li><a href='#' className="text-white">Linked in</a></li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 flex-1 card hover:shadow-lg hover:scale-105 hover:bg-white transition duration-300">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7xYEue3PtvX1RcgcjxYfe9nFIyM7aE-PYQ' alt="Jayesh" />
              <h3 className="text-center">Jayesh</h3>
              <p className="text-white">Developer</p>
              <p className="text-white">Aliquam erat volutpat. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis</p>
              <ul>
                <li><a href='https://github.com/Jayesh' className="text-white"> Github </a></li>
                <li><a href='#' className="text-white">Linked in</a></li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 flex-1 card hover:shadow-lg hover:scale-105 hover:bg-richblack-900 transition duration-300">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7xYEue3PtvX1RcgcjxYfe9nFIyM7aE-PYQ' alt="Devpatel" />
              <h3 className="text-center">Devpatel</h3>
              <p className="text-white">Developer</p>
              <p className="text-white">Aliquam erat volutpat. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis</p>
              <ul>
                <li><a href='https://github.com/Devpatel' className="text-white"> Github </a></li>
                <li><a href='#' className="text-white">Linked in</a></li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 flex-1 card hover:shadow-lg hover:scale-105 hover:bg-white transition duration-300">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7xYEue3PtvX1RcgcjxYfe9nFIyM7aE-PYQ' alt="Ishant Rathi" />
              <h3 className="text-center">Ishant Rathi</h3>
              <p className="text-white">Developer</p>
              <p className="text-white">Aliquam erat volutpat. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis</p>
              <ul>
                <li><a href='https://github.com/IshantRathi' className="text-white"> Github </a></li>
                <li><a href='#' className="text-white">Linked in</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
