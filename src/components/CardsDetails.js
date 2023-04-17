import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DLT,ADD, REMOVE } from "../redux/actions/action";
const CardsDetails = () => {

    const [data, setData] = useState([])
    const {id}=useParams();
    // console.log(id);

    

    const history=useNavigate();
    const dispatch=useDispatch();

    const getData=useSelector((state)=>{
        return state.cartreducer.carts
       })
     
    //    console.log(getData);

    const compare=()=>{
        let comparedata=getData.filter((e)=>{
            return e.id==id
        })
        setData(comparedata)
    }


    const send = (e) => {
        // console.log(e)
        dispatch(ADD(e));
    };

    const dlt = (id) => {
        dispatch(DLT(id));
        // console.lo g('hey')
        history("/");
      };

      const remove=(item)=>{
        dispatch(REMOVE(item))
      }
     

    useEffect(()=>{
        compare();

    },[id])
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center"> Item details Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {
                data.map((ele)=>{
                    return(
                        <>
                        <div className="items_img">
              <img
                src={ele.imgdata}
                alt="img"
              />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong> : {ele.rname}
                    </p>
                    <p>
                      <strong>Price</strong> : {ele.price}
                    </p>
                    <p>
                      <strong>Dishes</strong> :{ele.address}
                    </p>
                    <p>
                      <strong>Total</strong> :₹ {ele.price*ele.qnty}
                    </p>
                    <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100,cursor:'pointer',background:'#ddd',color:"#111"}}>
                            <span style={{fontSize:25}} onClick={ele.qnty<=1 ?()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                            <span style={{fontSize:24}}>{ele.qnty}</span>
                            <span style={{fontSize:25}} onClick={()=>send(ele)}>+</span>
                    </div>
                  </td>     
                  <td>
                    <p><strong>Rating :</strong><span className="square rounded-pill " style={{background:'green',color:"fff",padding:"2px 5px",border:"2px solid gray",width: "150px"}}>{ele.rating}*</span></p>
                    <p><strong>Order Review : </strong><span>{ele.somedata}</span></p>
                    <p><strong>Remove :</strong><span><i className="fas fa-trash" onClick={()=>dlt(ele.id)} style={{color:"red",cursor:'pointer'}} ></i></span></p>
                  </td>
                </tr>
              </Table>
            </div>
                        </>
                    );
                })
            }
            </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
