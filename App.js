import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { Card} from 'react-native-shadow-cards';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (

<SafeAreaView style={styles.scrollUpOrDown}>
   <View style={styles.main_view}>
      <View style={styles.first_view}>
        <View style={styles.back}/>    
               
               <View style={styles.avatar_container}><Image style={styles.avatar} source={require("./Moses.PNG")}/></View> 
               
               <View style={styles.details}>Mokoena Sidwell Nyamatana</View>
               <View style={styles.details}>{'\n'}B.Eng in Electronics and Computer Systems</View>
               <View style={styles.details}>{'\n'}10809967</View>
     </View>
     
       
  <View style={styles.second_view}>
  <View style={styles.sep2}></View>  

    <View style={styles.sep}></View>
    <View style={styles.lova}>Year 1 Semester 1</View>

          
          <View style={styles.lova2}><Text style={styles.course_name}>{'\u2B24'} Engineering Mathematics and Modelling {'\u2B24'}</Text></View>   
          <View style={styles.grade_symbol}>B+</View>

          <View style={styles.lova2}><Text style={styles.course_name}>{'\u2B24'} Design and Practice {'\u2B24'}</Text></View>   
          <View style={styles.grade_symbol}>A+</View>

          <View style={styles.lova2}><Text style={styles.course_name}>{'\u2B24'} Object-Oriented Programming C++ {'\u2B24'}</Text></View>   
          <View style={styles.grade_symbol}>B+</View>

          


    <View style={styles.sep}></View>
    <View style={styles.lova}>Year 1 Semester 2  </View>


                    <View style={styles.lova2}><Text style={styles.course_name}>{'\u2B24'} Engineering Mathematics and Modelling {'\u2B24'}</Text></View>   
                    <View style={styles.grade_symbol}>B+</View>

                    <View style={styles.lova2}><Text style={styles.course_name}>{'\u2B24'} Digital Logic Design {'\u2B24'}</Text></View>   
                    <View style={styles.grade_symbol}>A</View>

                    <View style={styles.lova2}><Text style={styles.course_name}>{'\u2B24'} Electrical Circuit Analysis {'\u2B24'}</Text></View>   
                    <View style={styles.grade_symbol}>A</View>




    <View style={styles.sep}></View>
    <View style={styles.lova}>Year 2 Semester 1</View>

                    <View style={styles.lova2}><Text style={styles.course_name}>{'\u2B24'} Data Structures and Algorithms {'\u2B24'}</Text></View>   
                    <View style={styles.grade_symbol}>B</View>

                    <View style={styles.lova2}><Text style={styles.course_name}>{'\u2B24'} Electronic Principles {'\u2B24'}</Text></View>   
                    <View style={styles.grade_symbol}>B+</View>

                    <View style={styles.lova2}><Text style={styles.course_name}>{'\u2B24'} Operating Systems {'\u2B24'}</Text></View>   
                    <View style={styles.grade_symbol}>A+</View>


    <View style={styles.sep}></View>
    <View style={styles.lova}>Year 2 Semester 2</View>

                    <View style={styles.dep2}><Text style={styles.course_name}>{'\u2B24'} Data Structures and Algorithms {'\u2B24'}</Text></View>   
                    <View style={styles.grade_symbol1}>B</View>
            
                    <View style={styles.dep2}><Text style={styles.course_name}>{'\u2B24'} Electronic Principles {'\u2B24'}</Text></View>   
                    <View style={styles.grade_symbol1}>B+</View>

                    <View style={styles.dep2}><Text style={styles.course_name}>{'\u2B24'} Operating Systems {'\u2B24'}</Text></View>   
                    <View style={styles.grade_symbol1}>A+</View>

    
  </View>

      
    
</View>
</SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  main_view: {
    height : '100%'
  },
  
  first_view: {
    flex: 6,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    paddingTop: '25',
    justifyContent:'space-evenly'
    
  },
  second_view: {
    flex: 17,
    backgroundColor: '#B0C4DE',
    color: '#fff'
    
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100/2,
    borderStyle: 'solid',
    borderColor: '#000',
    size: '10',
    overflow: 'hidden'
    
  },
  
  details: {
    color:'#fff',
    alignContent:'center',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily:'sans-serif', 
  },

  lova: {
    alignItems: 'center',
    height:'5%',
    width: '70%',
    backgroundColor: '#34495E',
    marginLeft: '15%',
    marginTop: '0%',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    justifyContent: 'center',
    fontSize: '20',
    fontWeight: 'bold',
    
  },

  grade_symbol: {
    fontWeight: 'bold',
    fontSize: '20',
    alignItems: 'center'
  },

  course_name: {
    fontSize: '20',
    fontWeight: 'bold',
    margintop: 20,
  
  },

  lova2: {
    marginTop: 15,
    paddingLeft: '5%',
    paddingRight: '2%',
    alignItems: 'center',
    
    
  },
  sep : {
    height: '1%',
    width: '34%',
    alignSelf: 'center',
    backgroundColor: '#2E4053',
    marginTop: 12,
  },

  scrollUpOrDown: {
    marginHorizontal: 5,
    backgroundColor: '#36454F'
  },

  dep2: {
    marginTop: 15,
    paddingLeft: '5%',
    paddingRight: '2%',
    alignItems: 'center',
    backgroundColor: '#B0C4DE',
  },
   course_name: {
    fontSize: 16,
    fontWeight: 'bold',
    margintop: 20
  },

  grade_symbol1: {
    fontWeight: 'bold',
    fontSize: '20',
    alignItems: 'center',
    backgroundColor: '#B0C4DE',
    height: '3%'

  },

  sep2 : {
    height: '3%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#4682B4',
    marginTop: '1%',
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
 
  back: {
    width: '0',
    height: '0',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 43,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#00FFFF',
    transform: [
      {rotate: '270deg'}
    ],
    paddingRight: '40%'

  },

  avatar_container: {
    
    borderStyle: 'solid',
    size: 100,
    borderColor: '#000' 
  }


  });
  
  