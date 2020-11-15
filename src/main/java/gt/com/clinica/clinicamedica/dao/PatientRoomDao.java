package gt.com.clinica.clinicamedica.dao;

import gt.com.clinica.clinicamedica.entity.PatientRoomEntity;
import gt.com.clinica.clinicamedica.entity.RecordEntity;
import gt.com.clinica.clinicamedica.service.ConectionService;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

public class PatientRoomDao implements ICrudPatientRoom{
    final String selectAllDoctors = "SELECT * FROM PacientesHabitacion";
    @Override
    public List<PatientRoomEntity> listAllRoomsP() {
        List<PatientRoomEntity> listRoomsP= new LinkedList<>();
        PatientRoomEntity roomp;
        Connection conexion = null;
        try{
            ConectionService con= ConectionService.getInstance();
            conexion = con.getConnection();
            PreparedStatement statement = conexion.prepareStatement(selectAllDoctors);
            ResultSet consulta=statement.executeQuery();
            while (consulta.next()) {
                roomp = new PatientRoomEntity();
                roomp.setIdPatientRoom(consulta.getInt("IdPacienteHabitacion"));
                roomp.setIdPatient(consulta.getInt("IdPaciente"));
                roomp.setIdRoom(consulta.getInt("IdHabitacion"));
                roomp.setDateIn(consulta.getDate("FechaIngreso"));
                roomp.setDateOut(consulta.getDate("FechaSalida"));
                listRoomsP.add(roomp);
            }
            consulta.close();
            return listRoomsP;
        }catch (SQLException e){
            System.err.println("ERROR FATAL! ");
            System.err.println(e.getMessage());
            return null;
        }finally {
            try {
                if(conexion !=null) {
                    conexion.close();
                }else{
                    System.out.println("no hay conexion y no se cierra");
                    return null;
                }
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
    }
}
