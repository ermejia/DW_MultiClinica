package gt.com.umg.clinica.clinicamedica.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EmployeeEntity extends PersonEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idEmpmloyee;
    private int idJob;

    public int getIdEmpmloyee() {
        return idEmpmloyee;
    }

    public void setIdEmpmloyee(int idEmpmloyee) {
        this.idEmpmloyee = idEmpmloyee;
    }

    public int getIdJob() {
        return idJob;
    }

    public void setIdJob(int idJob) {
        this.idJob = idJob;
    }
}
