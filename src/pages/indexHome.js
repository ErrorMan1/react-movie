import React, { Component } from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import favorite from '../img/favorite.png';

import { Col, Row, Avatar, } from 'antd';
import { Cards, H1, } from '../components/styleds/card.js';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class Home extends Component {

  handleClick = (e) => {
    this.props.moviesid(e.target.id)
  }
    
  state = {
    data: []
  }
    
  render() {

    return (
     
      <div className="App-bg">
        <Row gutter={16}>
        { 
          this.props.movies.map(Items => (
            <Col span={6}>
              <div className="cardiner" key={Items.toString()}>
                <Cards>
                  <H1 className="name">{ Items.name }</H1>
                  <H1 className="released">{ Items.released }</H1>
                  <img alt="picMovie" src={ Items.image } className="cover" />
                  <H1 className="rated"><Avatar src={favorite} className="avatar"></Avatar>{ " "+ Items.rated + " " }<span className="span"> / 10 </span></H1>
                  <Link to="/detail" className="link-detail" id={Items.id} onClick={this.handleClick}>Detail</Link>
                </Cards>
              </div>
            </Col>
          ))
        }
        {/* {
          this.props.movies.map(ID => (
            <H1 className="name">{ ID.id }</H1>
            ))
        } */}        
        </Row>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  movies: state.cktype,//movie == this.props.movie
})


export default connect ( //สามารถส่งได้ 2 ตัว และสามารถเชื่อมต่อกับredux ได้ 
  mapStateToProps,
  null,
  )(Home);
