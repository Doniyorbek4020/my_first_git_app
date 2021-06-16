import React, { Component, createRef } from 'react'
import {
    Row, 
    Col, 
    Container, 
    Button} from 'reactstrap';

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            userList: [
                {name: 'Abdulloh', age: 30, locate: 'Andijon, O\'zbekiston'},
                {name: 'Abdurahmon', age: 31, locate: 'Farg`ona, O\'zbekiston'},
                {name: 'Abdusattor', age: 32, locate: 'Buxoro, O\'zbekiston'},
                {name: 'AbduAmin', age: 33, locate: 'Namangan, O\'zbekiston'},
                {name: 'MuhammadIso', age: 34, locate: 'Samarqand, O\'zbekiston'},
                {name: 'Muhammad', age: 35, locate: 'Navoiy, O\'zbekiston'},
                {name: 'Ali', age: 36, locate: 'Qarshi, O\'zbekiston'},
                {name: 'Alisher', age: 37, locate: 'Sirdaryo, O\'zbekiston'},
                {name: 'Muhammadrizo', age: 38, locate: 'Jizzakh, O\'zbekiston'},
                {name: 'sa`ad', age: 39, locate: 'Xorazm, O\'zbekiston'},
                {name: 'Muslim', age: 40, locate: 'Qashqadaryo, O\'zbekiston'},
                {name: 'Jahongir', age: 41, locate: 'Surxondaryo, O\'zbekiston'},
              ],

              isEdit: false,
              editUser: null
        }
        this.nameRef = createRef();
        this.ageRef = createRef();
        this.locateRef = createRef();
    }
   delete = (index)=>{
    let userDel = this.state.userList
    delete userDel[index]
    this.setState({
        userList: userDel
    });
   }
Add(){
    if(!this.state.isEdit){
        let User = {
            name: this.nameRef.current.value,
            age: this.ageRef.current.value,
            locate: this.locateRef.current.value,
        }
     let   UserArr = [];
        this.state.userList.map((User)=>{
            UserArr.push(User)
            return true;
        });
        UserArr.push(User);

        this.setState({
            userList: UserArr.reverse()
        });
        this.nameRef.current.value = '';
        this.ageRef.current.value = null;
        this.locateRef.current.value = '';

    }else{
        let editArr = [];
        this.state.userList.map((User)=>{
            editArr.push(User);
            return true;

        });
        editArr[this.state.editUser].name = this.nameRef.current.value;
        editArr[this.state.editUser].age = this.ageRef.current.value;
        editArr[this.state.editUser].locate = this.locateRef.current.value;
        this.setState({
            userList: editArr
        });
        this.nameRef.current.value = '';
        this.ageRef.current.value = null;
        this.locateRef.current.value = '';
        this.setState({
            isEdit: false
        })    
    }
}

   Edit(obj, id) {
     this.setState({
       isEdit: true,
       editUser: id
        });
      this.nameRef.current.value = obj.name;
      this.ageRef.current.value = obj.age;
       this.locateRef.current.value = obj.locate;
    }

    render() {
        return (
            <>
               <Container>
               <Row>
                      <Col md='3'>
                      <label htmlFor='name' 
                        className='text-white'>
                        Name
                        </label>
                         <input 
                         className='p-2 fs-5' 
                         type='text'
                         ref={this.nameRef} 
                         placeholder='Enter name' 
                         id='name'/> 
                      </Col>
                      <Col md='3'>
                      <label 
                        htmlFor=' age' 
                        className='text-white'>
                        Age
                        </label>
                         <input 
                         className='p-2 fs-5' 
                         type='number' 
                         ref={this.ageRef}
                         placeholder='Enter age' 
                         id=' age'/>
                      </Col>
                      <Col md='3'>
                        
                      <label 
                        htmlFor='locate'
                        className='text-white'>
                        location
                        </label>
                         <input 
                         className='p-2 fs-5' 
                         type='text' 
                         ref={this.locateRef}
                         placeholder='Enter location' 
                         id='locate'/>
                      </Col>
                      <Col md='3'>
                         <label className='text-white fs-5 '>Qo'shish</label>
                            {
                                
                                this.state.isEdit ? 
                                <Button color='info' className='btn-lg' onClick={()=>this.Add()}   >Edit</Button>:
                                <Button color='danger' className='btn-lg' onClick={()=>this.Add()}   >Qo'shish</Button>
                            }
                        
                      </Col>
                         
                    

                  </Row>
               
                   <Row>
                       <Col>
                         <table className='table'>
                             <thead>
                                 <tr>
                                     <th>N/o</th>
                                     <th>Name</th>
                                     <th>Age</th>
                                     <th>location</th>
                                     <th>Action</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {
                                     this.state.userList.map((User, index)=>{
                                         return(
                                           <tr>
                                               <td>{ index + 1 }</td>
                                               <td>{ User.name }</td>
                                               <td>{ User.age }</td>
                                               <td>{ User.locate }</td>
                                               <td><Button color='info'   onClick={()=>this.Edit(index, User)}>Edit</Button></td>
                                               <td><Button color='danger' onClick={()=>this.delete(index)}>Delete</Button></td>
                                           </tr>  
                                         )
                                     })
                                 }
                             </tbody>
                         </table>
                       </Col>
                   </Row>
               </Container> 
            </>
        )
    }
}
