package gt.com.clinica.clinicamedica.dao;

import gt.com.clinica.clinicamedica.entity.ClinicEntity;
import gt.com.clinica.clinicamedica.entity.RoomEntity;
import gt.com.clinica.clinicamedica.service.ConectionService;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

public class RoomDao implements  ICrudRoom {

    final String selectAllRooms = "SELECT * FROM Habitaciones;";
    @Override
    public List<RoomEntity> listAllRooms() {
        List<RoomEntity> listRoom = new LinkedList<>();
        RoomEntity room ;
        Connection conexion = null;
        try{
            ConectionService con= ConectionService.getInstance();
            conexion = con.getConnection();
            PreparedStatement statement = conexion.prepareStatement(selectAllRooms);
            ResultSet consulta=statement.executeQuery();
            while (consulta.next()) {
                room = new RoomEntity();
                room.setIdRoom(consulta.getInt("IdHabitacion"));
                room.setNuBed(consulta.getInt("NoCamas"));
                room.setDescription(consulta.getString("Descripcion"));
                room.setState(consulta.getString("Estado"));
                listRoom.add(room);
            }
            consulta.close();
            return listRoom;
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

    final String deleteRoom = "DELETE FROM Habitaciones WHERE IdHabitacion =";
    @Override
    public int deleteRoom(int id) {
        int status = 0;
        Connection conexion = null;
        try {
            ConectionService con = ConectionService.getInstance();
            conexion = con.getConnection();
            PreparedStatement parametro= conexion.prepareStatement(deleteRoom+id);
            status = parametro.executeUpdate();
            conexion.close();
        } catch (SQLException e) {
            System.err.println("ERROR FATAL! ");
            System.err.println(e.getMessage());
        } finally {
            try {
                conexion.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
        return status;
    }

    final String updateRoom = "UPDATE Habitaciones set NoCamas=?,Descripcion=?,Estado=? WHERE IdHabitacion=?;";
    @Override
    public int updateRoom(RoomEntity room) {
        int status = 0;
        Connection conexion = null;
        try {
            ConectionService con = ConectionService.getInstance();
            conexion = con.getConnection();
            PreparedStatement parametro = conexion.prepareStatement(updateRoom);
            parametro.setInt(1, room.getNuBed());
            parametro.setString(2, room.getDescription());
            parametro.setString(3,room.getState());
            parametro.setInt(4,room.getIdRoom());
            status = parametro.executeUpdate();
            conexion.close();
        } catch (SQLException e) {
            System.err.println("ERROR FATAL! ");
            System.err.println(e.getMessage());
        } finally {
            try {
                conexion.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
        return status;
    }
    final String addRoom = "INSERT INTO Habitaciones(NoCamas,Descripcion,Estado) VALUES(?,?,?);";
    @Override
    public int addRoom(RoomEntity room) {
        int status = 0;
        Connection conexion = null;
        try {
            ConectionService con = ConectionService.getInstance();
            conexion = con.getConnection();
            PreparedStatement parametro = conexion.prepareStatement(addRoom);
            parametro.setInt(1, room.getNuBed());
            parametro.setString(2, room.getDescription());
            parametro.setString(3,room.getState());
            status = parametro.executeUpdate();
            conexion.close();

        } catch (SQLException e) {
            System.err.println("ERROR FATAL! ");
            System.err.println(e.getMessage());
        } finally {
            try {
                conexion.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
        return status;
    }
}
