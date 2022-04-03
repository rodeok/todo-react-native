import React,{useState} from 'react'
import { StyleSheet,TouchableOpacity,Text,Keyboard, View, KeyboardAvoidingView,TextInput  } from 'react-native';
// import {  } from 'react-native-web';
import Task from './components/Task'
export default function App() {

  const [task,setTask]= useState()
  const [taskItems,setTaskItems] = useState([])

  const handleAddTask = () =>{
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }
 const  completeTask = (index) =>{
   let itemsCopy = [...taskItems]
   itemsCopy.splice(index,1)
   setTaskItems(itemsCopy)
 }
  return (
    //  tasks
    <View style={styles.container}>
    <View style = {styles.tasksWrapper}>
         <Text style = {styles.sectionTitle} >Todays Tasks</Text>
    </View>
     <View style={styles.items}>
      {/* Tasks Goes Here */}
      {
        taskItems.map((item, index) =>{
         return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                     <Task  text={item}/>
                </TouchableOpacity>
         )
         
        })
      }
      {/* <Task text={"Text 1"}/>
      <Task text={"Text 2"}/> */}
     </View>
 

    <KeyboardAvoidingView
    // behavior={Platform.OS === "ios" ? "padding": "height"}
    style = {styles.writeTaskWrapper}
    >
  <TextInput style={styles.input} placeholder={"Write a Task"}  value={task} onChangeText={text => setTask(text)}/>

  <TouchableOpacity onPress={()=> handleAddTask()} >
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>+</Text>
  </View>
  </TouchableOpacity>
    </KeyboardAvoidingView>
    {/* <Text>Created By Fav</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: "bold"
  },
  items:{
        marginTop: 30,
  },
  writeTaskWrapper:{
     position: 'absolute',
     bottom: 60,
     width: "100%",
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    backgroundColor: "#C0C0C0",
    borderWidth: 1
  },
  addText:{
    alignItems: "center",
    position: 'absolute',
    top: -1,
    left: 16,
    bottom: 10,
    fontSize: 40,
  }  

});
