import React from 'react'

const sidebar = () => {
  return (
    <div>
        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i className="fas fa-fw fa-cog" />
          <span>Manage Product</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="/addproduct">Add Product</a>
            <a className="collapse-item" href="/listproduct">List Product</a>
            {/* <a className="collapse-item" href="cards.html">Cards</a> */}
          </div>
        </div>
      </li>
    </div>
  )
}

export default sidebar
