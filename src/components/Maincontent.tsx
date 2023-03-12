import React from 'react'

const Maincontent = () => {
  return (
    <main className='w-11/12 mx-auto mt-8 grid'>
      <section className='left-nav bg-red-600 grid-cols-4'>
        <input type="checkbox" name="full-time" id="" />
        <div className="location">
          <h4>LOCATION</h4>
          <form>
            <input type="text" placeholder='City, state, zip code or country' />

            <input type="radio" name="location" value="London" id="london"/>
            <label htmlFor="london">London</label>
            <input type="radio" name="location" value="Amsterdam" id="amsterdam" />
            <label htmlFor="amsterdam">Amsterdam</label>
            <input type="radio" name="location" value="New York" id="newyork" />
            <label htmlFor="newyork">New York</label>
            <input type="radio" name="location" value="Berlin" id="berlin" />
            <label htmlFor="berlin">Berlin</label>
          </form>
        </div>
      </section>
      <section className='right job-listings bg-yellow-700 text-navy-blue'>
        <article className="card bg-white rounded shadow-4xl">
          <img src="" alt="" />
          <div className="company-info flex flex-col justify-between">
            <h5 className='company-name'>Kasisto</h5>
            <p className="role">Front-End Software Engineer</p>
            <button className='border border-nay-blue bg-white text-navy-blue'>Full time</button>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Maincontent