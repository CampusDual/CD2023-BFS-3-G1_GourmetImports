package com.campusdual.springontimize.ws.core.rest;

import com.campusdual.springontimize.api.core.service.ISaleService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sales")
public class SaleRestController extends ORestController<ISaleService> {

    @Autowired
    private ISaleService saleService;

    @Override
    public ISaleService getService() {
        return this.saleService;
    }
}
