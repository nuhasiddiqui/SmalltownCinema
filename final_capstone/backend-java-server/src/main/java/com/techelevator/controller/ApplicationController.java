package com.techelevator.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationController {
    /****************************************************************************
     * You application controller code should go here
     ******************************************************************************/




    /**
     * Helper method to log API calls made to the server
     *
     * @param message - message to be included in the server log
     */
    public void logAPICall(String message) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss.A");
        String timeNow = now.format(formatter);
        System.out.println(timeNow + "-" + message);

    }
}
