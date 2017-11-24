package com.kiaziz.data;

import java.io.IOException;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class ZonedDateTimeDeserializer extends JsonDeserializer<ZonedDateTime>
{
	@Override
    public ZonedDateTime deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException,
            JsonProcessingException {
        return ZonedDateTime.parse(jp.getText(), DateTimeFormatter.ISO_DATE_TIME);
    }
}
