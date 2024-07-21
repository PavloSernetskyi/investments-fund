package qwasar.investments_fund.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import qwasar.investments_fund.model.Investment;
import qwasar.investments_fund.repository.InvestmentsRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class InvestmentsController {

  @Autowired
  InvestmentsRepository investmentsRepository;

  @PostMapping("/investment")
  Investment newInvestment(@RequestBody Investment newInvestment){
    return investmentsRepository.save(newInvestment);
  }

  @GetMapping("/investments")
  List<Investment> getAllInvestments(){
    return investmentsRepository.findAll();
  }

}
