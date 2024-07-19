package qwasar.investmens_fund.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Investments {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String investmentName;
  private String investmentDescription;
  private Long amountInvested;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getInvestmentName() {
    return investmentName;
  }

  public void setInvestmentName(String investmentName) {
    this.investmentName = investmentName;
  }

  public String getInvestmentDescription() {
    return investmentDescription;
  }

  public void setInvestmentDescription(String investmentDescription) {
    this.investmentDescription = investmentDescription;
  }

  public Long getAmountInvested() {
    return amountInvested;
  }

  public void setAmountInvested(Long amountInvested) {
    this.amountInvested = amountInvested;
  }
}