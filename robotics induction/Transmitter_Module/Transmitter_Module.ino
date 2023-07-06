#include <VirtualWire.h> /*importing VirtualWire library that provides features
                          to send or recieve short messages, without addressing, retransmit or acknowledgment,*/
char *control;  //intialising character variable
const int pinX = 2; // intialising an integer variable who's value is constant throughtout the code
int buttonA = 0; //  intialising an integer variable

void setup() // setup code runs once:
{
Serial.begin(9600);
pinMode(pinX, INPUT);//function telling the Aduino, which pin is used and it is for input (button pressed or not )
pinMode(13, OUTPUT); //function telling the Aduino, which pin is used and it is for output (signal sent is visible)
vw_set_ptt_inverted(true); /*"Configure the push to talk(PPT)" polarity. PPT is a two-way communication method that uses half-duplex.
                           To use PTT, users must press a button on the PTT device while sending signal, then release it when done.*/
                          // Required for DR3100 
vw_set_tx_pin(12); //Configuring the transmit pin.(By default 12)
vw_setup(4000); //Speed of data transfer bps

delay(100); // Pauses the program for some amount of time so we can have proper visibility
}

void loop() // loop code runs repeatedly:
{
  buttonA = digitalRead(pinX); //Reads the value from a specified digital pin, either HIGH or LOW.
  Serial.println(control); //Prints data to the serial port as human-readable ASCII text.

 if (buttonA == HIGH) // checking if the input is high
{
 control=(char*)'1' ; 
vw_send((uint8_t *)control, strlen(control)); //Transmits a message."message" value [type casting char to integer] and "length" is the bytes occupied by char control 
digitalWrite(13,LOW); //The function is used to write a LOW value to a digital pin.[LED OF TRANSMITTER DOES NOT GLOW]
}
 else //checking if the input is not high
{
 control=(char*)'0';
vw_send((uint8_t *)control, strlen(control));//Transmits a message. "message" value [type casting char to integer] and "length" is the bytes occupied by char control
vw_wait_tx();  // Wait until the whole message is gone
digitalWrite(13, HIGH); //The function is used to write a HIGH value to a digital pin.[LED OF TRANSMITTER GLOWS]
 }
}
