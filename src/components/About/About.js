import React, {Component} from 'react'
import './About.css'
export default class About extends Component {
    renderStatsItem(i, h3, p) {
        return <div className="stats-item">

            <div className="stats-icon">
                <i className={`fa fa-${i}`}/>
            </div>
            <div>
                <h3>{h3}</h3>
                <p>{p}</p>
            </div>

        </div>
    }
    render() {
        return (
            <div className="about-container">
                <div className="about-page">

                    <div className="about-info">
                        <div className="caption-contain">
                            <h1 className="caption">Welcome To GearM - Explore Us Today!</h1>
                            <p className="caption-p">Digitizing trends and disruptive technologies are
                                giving companies the ability to radically change business models, and create new
                                products and services.</p>
                        </div>

                        <div className="stats">

                            {this.renderStatsItem('folder-open', '260 +', 'Successfully completed cases.')}
                            {this.renderStatsItem('users', '750 +', 'Highly specialised sconsultants.')}
                            {this.renderStatsItem('fire', '100 %', 'Satisfaction of our customers.')}
                            {this.renderStatsItem('map-signs', '132', 'Countries where we have clients.')}
                        </div>
                    </div>
                    <div className="about-img">
                        <img alt="about" src="/img/about-img-2.png"/>
                    </div>
                </div>

            </div>

        )
    }
}
