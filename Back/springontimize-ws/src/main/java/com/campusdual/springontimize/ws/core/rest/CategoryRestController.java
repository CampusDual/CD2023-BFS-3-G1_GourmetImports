package com.campusdual.springontimize.ws.core.rest;

import com.campusdual.springontimize.api.core.service.ICategoryService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categories")
public class CategoryRestController extends ORestController<ICategoryService> {

    @Autowired
    private ICategoryService categoryService;

    @Override
    public ICategoryService getService() {
        return this.categoryService;
    }
}
