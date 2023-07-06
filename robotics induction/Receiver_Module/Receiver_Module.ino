#include <VirtualWire.h>  /*importing VirtualWire library that provides features
                          to recieve or  send short messages, without addressing, retransmit or acknowledgment,*/
void setup() // all the code inside the parenthesis will only execute once
{
vw_set_ptt_inverted(true); /*"Configure the push to talk(PPT)" polarity. PPT is a two-way communication method that uses half-duplex.
                           To use PTT, users must press a button on the PTT device while sending signal, then release it when done.*/
                          // Required for DR3100
vw_set_rx_pin(12); // Configure the receiver pin so data can connect to 12 pin
vw_setup(4000); // Begin using all settings and initialize the virtual wire library. All operations will take place at 4000 speed bits per second
Serial.begin(9600); /* sets the baud rate (signifies the data rate in bps)for serial data communication. 
                       The default baud rate in Arduino is 9600 bps*/
                       // same as that of transmitter
pinMode(13, OUTPUT); //function telling the Aduino, which pin is used and it is for output (signal recieved is visible) 
vw_rx_start(); /* Activate the receiver process and Start the receiver phase lock loop 
                (generates an output signal whose phase is related to the phase of an input signal)*/ 
}
void loop()//all the code inside the parenthesis will execute multiple times
{
uint8_t buf[VW_MAX_MESSAGE_LEN]; //creating "buf", an array where the message is copied.[integer array]
uint8_t buflen = VW_MAX_MESSAGE_LEN; //"buflen"[integer variable]have the array's max size upon input,and upon return the number of bytes actually copied is retured
                                    //VW_MAX_MESSAGE_LEN  Maximum number of bytes in a message, counting the byte count 
   Serial.println();  //Prints data to the serial port as human-readable ASCII text.


if (vw_get_message(buf, &buflen)) /* Reading the last received message.The function itself returns true if the message was verified correct,
                                 or false if a message was received but appears to have been corrupted.*/
{
if(buf[0]=='1')// Checking which signal is recieved
{
digitalWrite(13,HIGH);//The function is used to write a HIGH value to a digital pin.[LED OF RECEIVER GLOWS]
} 

else 
{
digitalWrite(13,LOW);//The function is used to write a LOW value to a digital pin.[LED OF RECEIVER DOES NOT GLOW]
}
}

}
