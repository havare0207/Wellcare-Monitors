package com.example.oblig2webprogrammeringhaavardelgsaas;

public class Billett {
    
    private int phoneNumber;
    private String email;
    private String tilbakemelding;

    public Billett(int phoneNumber, String email, String tilbakemelding) {
       
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.tilbakemelding = tilbakemelding;
    }
    public Billett() {}


        public int getPhoneNumber () {
            return phoneNumber;
        }

        public void setPhoneNumber ( int phoneNumber){
            this.phoneNumber = phoneNumber;
        }

        public String getEmail () {
            return email;
        }

        public void setEmail (String email){
            this.email = email;
        }
        public String gettilbakemelding () {
            return tilbakemelding;
        }

        public void settilbakemelding (String tilbakemelding){
            this.tilbakemelding = tilbakemelding;
        }

    }



