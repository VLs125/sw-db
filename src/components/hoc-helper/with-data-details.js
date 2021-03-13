import React,{Component} from 'react';
import Loader from '../loader/loader';


const withDataDetails =(View, getData,getImage)=>{

    return class extends Component{
     
      state = {
        data:null,
        loading:false,
        image:''
      }
    
    
      getId(){
        const {selectedId} = this.props
        return selectedId
      }
    
      componentDidMount() {
      
        this.detailsUpdate(this.getId())
      }
    
      componentDidUpdate(prevProps){
        
        if(this.props.selectedId !== prevProps.selectedId){
         
          this.detailsUpdate(this.getId())
        }
      
      }
      detailsUpdate(id){
        if(id===null){
          return ;
        }
        getData(id)
          .then((data) => {
            this.setState({
            data:data,
            loading:true,
            })
          })
        
      }
      
      render(){
        const { data } = this.state;
        if (!data) {
          return <Loader />
        }
        return <View {...this.props} data={data} image={getImage(this.getId())}/>
      }
    }
  }
  

  export default withDataDetails;