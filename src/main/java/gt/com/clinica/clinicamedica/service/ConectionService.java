package gt.com.clinica.clinicamedica.service;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class ConectionService {
    private static DataSource dataSource;
    private static ConectionService instance;

    private ConectionService(){
    }

    public static ConectionService getInstance(){
        if(instance==null){
            instance=new ConectionService();
        }
        return instance;
    }

    public Connection getConnection() throws SQLException {
        try {
            dataSource = (DataSource) new InitialContext().lookup("jdbc/final");
        }
        catch (NamingException e) {
        }
        return dataSource.getConnection();
    }
}