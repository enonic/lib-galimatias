package com.enonic.galimatias;


public class URL {
  public io.mola.galimatias.URL parse(String input)
    throws io.mola.galimatias.GalimatiasParseException {
      return io.mola.galimatias.URL.parse(input);
    }

  public io.mola.galimatias.URL normalize(io.mola.galimatias.URL input)
    throws io.mola.galimatias.GalimatiasParseException {
      return new io.mola.galimatias.canonicalize.RFC3986Canonicalizer().canonicalize(input);
    }
} // public class URL
