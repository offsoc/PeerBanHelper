package com.ghostchu.peerbanhelper.database.dao;

import com.ghostchu.peerbanhelper.database.Database;
import com.ghostchu.peerbanhelper.database.table.BanListEntity;
import com.ghostchu.peerbanhelper.wrapper.BanMetadata;
import com.ghostchu.peerbanhelper.wrapper.PeerAddress;
import com.j256.ormlite.dao.BaseDaoImpl;
import com.j256.ormlite.table.TableUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@Slf4j
public class BanListDao extends BaseDaoImpl<BanListEntity, Long> {
    public BanListDao(@Autowired Database database) throws SQLException {
        super(database.getDataSource(), BanListEntity.class);
    }

    public Map<PeerAddress, BanMetadata> readBanList() {
        Map<PeerAddress, BanMetadata> map = new HashMap<>();
        try {
            queryForAll().forEach(e -> map.put(e.getAddress(), e.getMetadata()));
        } catch (Exception e) {
            log.error("Unable to read stored banlist, skipping...", e);
        }
        return map;
    }

    public int saveBanList(Map<PeerAddress, BanMetadata> banlist) throws SQLException {
        TableUtils.dropTable(this, true);
        TableUtils.createTableIfNotExists(getConnectionSource(), BanListEntity.class);
        List<BanListEntity> entityList = new ArrayList<>();
        banlist.forEach((key, value) -> entityList.add(new BanListEntity(null, key, value)));
        return create(entityList);
    }
}
