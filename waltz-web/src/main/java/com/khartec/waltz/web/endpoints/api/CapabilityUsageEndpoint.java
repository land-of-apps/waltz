/*
 *  This file is part of Waltz.
 *
 *     Waltz is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Waltz is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Waltz.  If not, see <http://www.gnu.org/licenses/>.
 */

package com.khartec.waltz.web.endpoints.api;

import com.khartec.waltz.model.application_capability.CapabilityUsage;
import com.khartec.waltz.service.capability_usage.CapabilityUsageService;
import com.khartec.waltz.web.DatumRoute;
import com.khartec.waltz.web.endpoints.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.khartec.waltz.web.WebUtilities.getId;
import static com.khartec.waltz.web.WebUtilities.mkPath;
import static com.khartec.waltz.web.endpoints.EndpointUtilities.getForDatum;

@Deprecated
@Service
public class CapabilityUsageEndpoint implements Endpoint {

    private static final String BASE_URL = mkPath("api", "capability-usage");

    private final CapabilityUsageService capabilityUsageService;


    @Autowired
    public CapabilityUsageEndpoint(CapabilityUsageService capabilityUsageService) {
        this.capabilityUsageService = capabilityUsageService;
    }


    @Override
    public void register() {

        String getByIdPath = mkPath(BASE_URL, "id", ":id");

        DatumRoute<CapabilityUsage> getByIdRoute = (request, response) ->
                capabilityUsageService.getUsage(getId(request));

        getForDatum(getByIdPath, getByIdRoute);
    }
}
