package gt.com.clinica.clinicamedica.entity;

public class RoomEntity {
    private int idRoom;
    private int nuBed;
    private String description;
    private String state;

    public int getIdRoom() {
        return idRoom;
    }

    public void setIdRoom(int idRoom) {
        this.idRoom = idRoom;
    }

    public int getNuBed() {
        return nuBed;
    }

    public void setNuBed(int nuBed) {
        this.nuBed = nuBed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
