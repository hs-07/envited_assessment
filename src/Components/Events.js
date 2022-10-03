import React from 'react';
import './Events.css';
import FontAwesomeIcon from '@fortawesome/free-solid-svg-icons';

function Events() {
  return (
    <>
    <div className="complete-event">
        <div className="conatiner-event">
           <div className="box-1">
            <h1>Birthday Bash</h1>
            <p>Hosted by Harshit</p>
           </div>

           <div className="box-2">
            <div className="date">
            <i class="fa-solid fa-calendar-days"></i>
            <div className="mini-head">
                <h3>18th August 6:00pm</h3>
                <p>to <b>19 August 1:00PM</b>  UTC +10</p>
            </div>

            </div>
            <div className="date">
            <i class="fa-solid fa-location-dot"></i>
            <div className="mini-head">
                <h3>Street Name</h3>
                <p>Suburb, State, Postcode</p>
            </div>
            </div>
           </div>
        </div>

        <div className="image">
        <img
          src="https://s3-alpha-sig.figma.com/img/da5c/d7a0/5bb115eb0fbbf3016d8761c66db3df9b?Expires=1665964800&Signature=QUByCVUqULvxTNQUJsONZNaXueKAN3Ppnc6GPecpAewSmPF-TITGPMQq0FMuM6EQ30dimSUv9cKKz3QAdeaWC2KfvbaQFeQxq2BgetS6khcpII-fidoOWtGePn4jjB5jrSsnDjH~KDsTc~7H3hofnQG63skuIqVd0oD8wwlyx~TIPfIvF-BXacsiXOYUbpNWmSV8fCJQLGbi0xHGM0JpC1l0TYCviq10xDDwn5vGVOFg9HWYbZw9u~0PJH6kPJN2dRvNyJWOyxsCVdtuAFPrKmbdxDw7QPcSi2mWJBHfjZbqjmr11Yguh3x6zNr5sjm2bexzgENYzMBg-hBnsa-PcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="image"
        />
      </div>
    </div>
    </>
  )
}

export default Events