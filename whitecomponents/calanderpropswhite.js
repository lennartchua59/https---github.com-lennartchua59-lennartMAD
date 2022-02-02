import React, { Component } from 'react';
 import {
     StyleSheet,
     Text,
     View
 } from 'react-native';
 import CalendarPicker from 'react-native-calendar-picker';

 class calendars extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            selectedEndDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);


    }

    onDateChange(date, type) {
        if (type === 'END_DATE') {
            this.setState({
                selectedEndDate: date,
            });
        } else {
            this.setState({
                selectedStartDate: date,
                selectedEndDate: null,
            });
        }
    }

    render() {

        const { selectedStartDate, selectedEndDate } = this.state;
        const minDate = new Date(); // Today
        const maxDate = new Date(2017, 6, 3);
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        const endDate = selectedEndDate ? selectedEndDate.toString() : '';

        return (
 
           
                <View style={styles._rectangle1}>
                    <CalendarPicker
                        startFromMonday={true}
                        allowRangeSelection={true}
                        minDate={minDate}
                        maxDate={maxDate}
                        todayBackgroundColor="#a00828"
                        selectedDayColor="black"
                        selectedDayTextColor="black"
                        onDateChange={this.onDateChange}
                        textStyle={{
                            color: 'black',
                          }}
                          scaleFactor={450}

                    />
               


              
            

                




            </View>
        );

    }
}

const styles = StyleSheet.create({
    _rectangle1:{
        backgroundColor: "white",
        justifyContent:'center',
       top: 30
    },
    
  });


export default calendars;