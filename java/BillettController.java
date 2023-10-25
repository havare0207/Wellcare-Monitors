package com.example.oblig2webprogrammeringhaavardelgsaas;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {

    private final List<Billett> List = new ArrayList<>();

    @PostMapping("/lagre")
    public String lagreBillett(Billett innBillett) {

        if (List.size() < 1) {
            List.add(innBillett);
        }
        else if(List.size() > 1){
        }
        return "Du har sendt en tilbakemelding, så du trenger ikke å prøve igjen!";
    }

    @GetMapping("/hentAlle")
     public List<Billett> hentAlle(){
        return List;

    }

    @PostMapping("/slett")
    public String slettBillett(){
        List.clear();
        return "Tilbakemeldingene har blitt slettet!";

    }
}
