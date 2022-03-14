import React,{useState, useEffect} from "react";
import "./Style.css";
// import location from '../Icons/location.svg';
 import AutoCompleteSearch from '../MyComponents/AutoCompleteSearch';
import axios from "axios";

export const Home = () => {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80') ",
      backgroundRepeat:'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      obasity:1
  }
  const[posts, setPost] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setPost(res.data.map(el=>el.id.toString()).slice(0,10))

    })
    .catch(err=>{
      console.log(err)
    })
  } ,[])
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="backgroundimage">
            <div className="image" style={myStyle}>
              <div className="contentwrapper">
                <div className="container1">
                  <div className="zomatoname">
                    <div className="zomato">ZOMATO</div>
                  </div>
                </div>
                <h1 className="text">
                  Discover the best food and drink
                  <span className="nextline">Sohna</span>
                </h1>
                <div className="searchcontainer">
                  <div className="search">
                    <div className="locationbox">
                      <div className="location">
                        {/* <i className="locationicon"> */}
                        <i class="fas fa-map-marker-alt" ></i>
                        {/* </i> */}
                        <input type='text' className="loc" placeholder="sohna" />

                        <i className="arrowicon">

                        </i>
                      </div>
                    </div>
                    <div className="autocompletesearch">
                      <div className="searchicon">
                      <AutoCompleteSearch suggestions={posts}/>
                      
                        
                        <i className="svg"></i>
                        {/* <input
                          type='text' className="searchitem"
                          placeholder="search for restaurant or a dish"
                         /> */}
                        {/* <div className="slide">

                        </div>
                         */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
