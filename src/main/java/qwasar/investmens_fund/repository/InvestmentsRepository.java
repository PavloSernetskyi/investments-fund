package qwasar.investmens_fund.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qwasar.investmens_fund.model.Investments;


public interface InvestmentsRepository extends JpaRepository<Investments, Long> {

}
