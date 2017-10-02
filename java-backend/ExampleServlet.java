//example servlet from
//http://www.oracle.com/technetwork/topics/newtojava/learn-141096.html#

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class ExampleServlet extends HttpServlet {
  public void doPost(HttpServletRequest request,
                    HttpServletResponse response)
                    throws ServletException, IOException
  {
    reponse.setContentType("text/html");
    PrintWriter out = response.getWriter();
      out.println("<title>example</title>" +
                  "<body> bgcolor=FFFFFF>:");

      out.println("<h2>Button Clicked</h2>");

      String DATA = request.getParameter("DATA");

      if(DATA != null){
        out.println(DATA);
      } else {
        out.println("No text entered");
      }

      out.println("<P>Return to <A HREF=../simpleHTML.html>Form</A>");
      out.close();
  }
}
