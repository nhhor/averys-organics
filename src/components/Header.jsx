import React from 'react';



function Header(){
  let imageArray = ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg', 'https://en.muddyboots.com/js/tinymce/jscripts/tiny_mce/plugins/imagemanager/files/fresh-produce_aus.jpg', 'https://keanyproduce.com/wp-content/uploads/2016/10/hero-press-inquiries.jpg', 'https://www.chewboom.com/wp-content/uploads/2019/12/New-Nachos-Party-Pack-Coming-To-Taco-Bell-On-December-26-2019-678x381.jpg'];

  let imageNumber = (Math.round(Math.random()*3));

  return (
    <div className="mainHeader">
      <h1 className="mainH1"> Avery's Organics </h1>
      <style jsx>{`
            .mainHeader {
              background-image: url(${imageArray[imageNumber]});
              // opacity: 1;
              // transition: opacity 1000ms;
              border-radius: 25px;
              height: 15vh;
              background-size: cover;
              margin-top: -7px;
              margin-left: -7px;
              margin-right: -7px;
              animation: header_fade_effect 5s infinite;
            }

            @keyframes header_fade_effect {
              0%   { opacity: 0; }
              100% { opacity: 1; }
            }

            .mainH1 {
              color: blue;
              position: fixed;
              top: 40px;
              left: 20px;
              background: rgba(255, 255, 255, .5);
              padding: 15px;
              border-radius: 25px;

            }
            `}</style>
    </div>
  );
}


export default Header;
