package qwasar.investments_fund.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qwasar.investments_fund.model.Investment;


public interface InvestmentsRepository extends JpaRepository<Investment, Long> {

}
